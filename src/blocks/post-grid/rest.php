<?php
if (!defined('ABSPATH')) exit();



class BlockPostGridRest
{
    function __construct()
    {
        add_action('rest_api_init', array($this, 'register_routes'));
    }


    public function register_routes()
    {
        register_rest_route(
            'blockxyz/v2',
            '/get_terms',
            array(
                'methods'  => 'POST',
                'callback' => array($this, 'get_all_terms'),
                'permission_callback' => '__return_true',
            )
        );

        register_rest_route(
            'blockxyz/v2',
            '/get_posts',
            array(
                'methods'  => 'POST',
                'callback' => array($this, 'get_posts'),
                'permission_callback' => '__return_true',
            )
        );

        register_rest_route(
            'blockxyz/v2',
            '/get_tax_terms',
            array(
                'methods'  => 'POST',
                'callback' => array($this, 'get_tax_terms'),
                'permission_callback' => '__return_true',
            )
        );
    }



    /**
     * Return Posts
     *
     * @since 1.0.0
     * @param WP_REST_Request $post_data Post data.
     */
    public function get_posts($post_data)
    {

        $queryArgs      = isset($post_data['queryArgs']) ? $post_data['queryArgs'] : [];

        error_log(serialize($queryArgs));


        $taxonomy       = isset($post_data['taxonomy']) ? $post_data['taxonomy'] : '';
        $post_type       = isset($post_data['post_type']) ? $post_data['post_type'] : '';
        $posts_per_page      = isset($post_data['posts_per_page']) ? $post_data['posts_per_page'] : '';
        $order      = isset($post_data['order']) ? $post_data['order'] : '';
        $orderby      = isset($post_data['orderby']) ? $post_data['orderby'] : '';
        $returnFields     = isset($post_data['returnFields']) ? $post_data['returnFields'] : [];



        $term           = $post_data['term'];
        $image_type     = $post_data['image_type'];
        $image_size     = $post_data['image_size'];
        $avatar_size    = $post_data['avatar_size'];
        $link_color     = $post_data['link_color'];
        $default_image  = isset($post_data['default_image']['id']) ? absint($post_data['default_image']['id']) : 0;
        $language       = $post_data['language'];



        $post_args = array(
            'post_type'      => $post_type,
            'post_status'    => 'publish',
            'order'          => $order,
            'orderby'        => $orderby,
            'posts_per_page' => $posts_per_page,
        );
        if ('all' !== $term && 0 !== absint($term) && 'none' !== $taxonomy) {
            $post_args['tax_query'] = array( // phpcs:ignore
                array(
                    'taxonomy' => $taxonomy,
                    'terms'    => $term,
                ),
            );
        }
        // WPML Compatability.
        global $sitepress;
        if (!empty($sitepress)) {
            $sitepress->switch_lang($language);
        }
        $query = new \WP_Query($post_args);
        if (!empty($sitepress)) {
            $sitepress->switch_lang($sitepress->get_default_language());
        }
        $posts = array();
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                global $post;
                $query->the_post();
                if ('gravatar' === $image_type) {
                    $thumbnail = get_avatar($post->post_author, $avatar_size);
                } else {
                    $thumbnail = get_the_post_thumbnail($post->ID, $image_size);
                    if (empty($thumbnail)) {
                        $thumbnail = wp_get_attachment_image($default_image, $image_size);
                    }
                }
                $post->featured_image_src = $thumbnail;

                // Get author information.
                $display_name = get_the_author_meta('display_name', $post->post_author);
                $author_url   = get_author_posts_url($post->post_author);

                $post->author_info               = new \stdClass();
                $post->author_info->display_name = $display_name;
                $post->author_info->author_link  = $author_url;

                $post->link = get_permalink($post->ID);



                if (empty($post->post_excerpt)) {
                    $post->post_excerpt = apply_filters('the_excerpt', wp_strip_all_tags(strip_shortcodes($post->post_content)));
                }

                if (!$post->post_excerpt) {
                    $post->post_excerpt = null;
                }

                $post->post_excerpt = wp_kses_post($post->post_excerpt);
                $post->post_content = apply_filters('ptam_the_content', $post->post_content);
                $posts[]            = $post;
            }
        }
        $return = $posts;
        die(wp_json_encode($return));
    }

    /**
     * Return terms for taxonomy.
     *
     * @since 1.0.0
     *
     * @param WP_REST_Request $tax_data The tax data.
     */
    public function get_all_terms($tax_data)
    {
        $taxonomy  = $tax_data['taxonomy'];
        $post_type = $tax_data['post_type'];
        add_filter('terms_clauses', array($this, 'terms_clauses'), 10, 3);
        $terms = get_terms(
            array(
                'taxonomy'   => $taxonomy,
                'hide_empty' => true,
                'post_type'  => $post_type,
            )
        );
        remove_filter('terms_clauses', array($this, 'terms_clauses'), 10, 3);
        if (is_wp_error($terms)) {
            die(wp_json_encode(array()));
        } else {
            die(wp_json_encode($terms));
        }
    }

    /**
     * Return terms for taxonomy.
     *
     * @since 4.0.0
     *
     * @param WP_REST_Request $tax_data The tax data.
     */
    public function get_tax_terms($tax_data)
    {
        $taxonomy = $tax_data['taxonomy'];
        $terms    = get_terms(
            array(
                'taxonomy'   => $taxonomy,
                'hide_empty' => true,
            )
        );
        if (is_wp_error($terms)) {
            die(wp_json_encode(array()));
        } else {
            die(wp_json_encode($terms));
        }
    }






    /**
     * Extend get terms with post type parameter.
     *
     * @global $wpdb
     * @param string $clauses Term clauses.
     * @param string $taxonomy Taxonomy.
     * @param array  $args Aaaarghhhhs.
     * @return string
     */
    public function terms_clauses($clauses, $taxonomy, $args)
    {
        if (isset($args['post_type']) && !empty($args['post_type']) && 'count' === $args['fields']) {
            global $wpdb;

            $post_types = array();

            if (is_array($args['post_type'])) {
                foreach ($args['post_type'] as $cpt) {
                    $post_types[] = "'" . $cpt . "'";
                }
            } else {
                $post_types[] = "'" . $args['post_type'] . "'";
            }

            if (!empty($post_types)) {
                $clauses['fields']  = 'DISTINCT ' . str_replace('tt.*', 'tt.term_taxonomy_id, tt.taxonomy, tt.description, tt.parent', $clauses['fields']) . ', COUNT(p.post_type) AS count';
                $clauses['join']   .= ' LEFT JOIN ' . $wpdb->term_relationships . ' AS r ON r.term_taxonomy_id = tt.term_taxonomy_id LEFT JOIN ' . $wpdb->posts . ' AS p ON p.ID = r.object_id';
                $clauses['where']  .= ' AND (p.post_type IN (' . implode(',', $post_types) . ') OR p.post_type IS NULL)';
                $clauses['orderby'] = 'GROUP BY t.term_id ' . $clauses['orderby'];
            }
        }
        return $clauses;
    }
}

$BlockPostGrid = new BlockPostGridRest();
