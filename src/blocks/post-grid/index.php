<?php
if (!defined('ABSPATH')) exit();



class BlockPostGrid
{
    function __construct()
    {
        add_action('init', array($this, 'register_scripts'));
    }


    // loading src files in the gutenberg editor screen
    function register_scripts()
    {
        wp_register_style('editor_style', PREFIX_PLUGIN_PATH . 'src/blocks/post-grid/index.css');
        wp_register_script('editor_script', PREFIX_PLUGIN_PATH . 'src/blocks/post-grid/index.js', array('wp-blocks', 'wp-element'));
        register_block_type('prefix-blocks/post-grid', array(
            'editor_script' => 'editor_script',
            'editor_style' => 'editor_style',
            'render_callback' => array($this, 'theHTML')
        ));
    }

    // front-end output from the gutenberg editor 
    function theHTML($attributes)
    {
        if (!is_admin()) {

            wp_enqueue_script('blk_post_grid', PREFIX_PLUGIN_PATH . 'build/index.js', array('wp-element'));

            //wp_enqueue_script('blk_post_grid', PREFIX_PLUGIN_PATH . 'src/blocks/post-grid/index.js', array('wp-element'));



            wp_enqueue_style('blk_post_grid', PREFIX_PLUGIN_PATH . 'src/blocks/post-grid/index.css');
        }

        error_log(serialize($attributes));


        $blocks = parse_blocks('<!-- wp:paragraph --><p>paragraph one</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>then two</p><!-- /wp:paragraph -->');

        wp_enqueue_style('splide');


        ob_start(); ?>
        <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.6/dist/js/splide.min.js"></script>
        <div class="post-grid-wrap">
            <div class="splide" role="group" aria-label="Splide Basic HTML Example">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide">Slide 01</li>
                        <li class="splide__slide">Slide 02</li>
                        <li class="splide__slide">Slide 03</li>
                        <li class="splide__slide">Slide 04</li>
                        <li class="splide__slide">Slide 05</li>
                        <li class="splide__slide">Slide 06</li>
                        <li class="splide__slide">Slide 07</li>
                        <li class="splide__slide">Slide 08</li>
                        <li class="splide__slide">Slide 09</li>
                    </ul>
                </div>
            </div>

            <script>
                new Splide('.splide').mount();
            </script>
            <code><?php echo serialize($blocks);
                    ?></code>
        </div>

<?php return ob_get_clean();
    }
}

$BlockPostGrid = new BlockPostGrid();
