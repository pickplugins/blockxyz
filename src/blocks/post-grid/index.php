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
            wp_enqueue_script('blk_post_grid', PREFIX_PLUGIN_PATH . 'src/blocks/post-grid/index.js', array('wp-element'));
            wp_enqueue_style('blk_post_grid', PREFIX_PLUGIN_PATH . 'src/blocks/post-grid/index.css');
        }

        error_log(serialize($attributes));

        ob_start(); ?>

        <div class="update-me-by-front-end-technologies">
            <h1>asda sasd Hello from asdasd1 Gutenberg Editor!!! <?php echo $attributes['dummyName']; ?></h1>
        </div>

<?php return ob_get_clean();
    }
}

$BlockPostGrid = new BlockPostGrid();
