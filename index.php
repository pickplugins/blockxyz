<?php

/**
 * Plugin Name: BlockXyz
 * Description: A boilerplate plate plugin structure for WP Gutenberg Block Development
 * Author: PickPlugins
 * Author URI: http://pickplugins.com
 * Text-Domain: blockshive
 */
if (!defined('ABSPATH')) exit();

class BlockXyz
{
    const VERSION = '1.0.0';

    function __construct()
    {
        $this->plugin_constants();
        add_action('plugins_loaded', [$this, 'init_plugin']);


        require_once(PREFIX_PLUGIN_PATH . 'src/blocks/post-grid/index.php');
    }

    public function init_plugin()
    {
        $this->enqueue_scripts();
    }

    public function plugin_constants()
    {
        define('PREFIX_VERSION', self::VERSION);
        define('PREFIX_PLUGIN_PATH', trailingslashit(plugin_dir_path(__FILE__)));
        define('PREFIX_PLUGIN_URL', trailingslashit(plugins_url('/', __FILE__)));
    }

    public function enqueue_scripts()
    {
        add_action('enqueue_block_editor_assets', [$this, 'register_block_editor_assets']);
    }

    public function register_block_editor_assets()
    {

        wp_enqueue_style(
            'prefix-editor',
            PREFIX_PLUGIN_URL . '/dist/output.css',
            [],
            false,
            'all'
        );
        wp_enqueue_style(
            'prefix-custom',
            PREFIX_PLUGIN_URL . '/dist/custom.css',
            [],
            false,
            'all'
        );


        wp_enqueue_script(
            'prefix-block-para',
            PREFIX_PLUGIN_URL . 'build/index.js',
            [
                'wp-blocks',
                'wp-editor',
                'wp-i18n',
                'wp-element',
                'wp-components',
                'wp-data'

            ]

        );
    }
}

$areYouPayingAttention = new BlockXyz();
