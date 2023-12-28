<?php
/**
 * Plugin Name:       Divineblocks
 * Description:       Gutenberg text block that enables settings for desktop, mobile, and phone on the screen..
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:			  Ilene Johnson
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       divineblocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */

namespace divineblocks\DIVINEB;

define('WP_DIVINE_BLOCKS_PLUGIN', __FILE__);
define('WP_DIVINE_BLOCKS_PLUGIN_DIR', untrailingslashit(dirname(WP_DIVINE_BLOCKS_PLUGIN)));


require  plugin_dir_path(__FILE__) . 'classes/divineblockcss.php';

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */


class Divine_Block_Class
{
    private static $instance = null;
    public static function get_instance()
    {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    /**
     * Class Constructor.
     */

    public function create_block_divineblocks_block_init()
    {

        register_block_type(__DIR__);

        add_filter('block_categories_all', array($this, 'create_block_category'));




    }


    public function __construct()
    {

        add_action('init', array($this, 'create_block_divineblocks_block_init'));

        add_action('wp_head', array($this,'make_the_css'), 100);


    }
    public function create_block_category()
    {
        // Adding a new category.
        $categories[] = array(
            'slug'  => 'divine-categories',
            'title' => 'Divine Category'
        );

        return $categories;
    }
    public function make_the_css()
    {
        $this->divine_block_parse_block();
    }







    public function get_our_block_styles($block)
    {
        $name = $block['blockName'];


        switch($name) {

            case 'create-block/divinetextblock':

                // error_log('we got our block name ' . $block['blockName']);

                $css_array =   \Divine_Block_Css::get_divine_text_block_css($block['attrs'], "");

                // $this->_setup_the_class($block['attrs']);
                $desktop = '@media only screen and (min-width: 768px) { ' . $css_array['desktop'] . '}';
                $tablet = '@media only screen and (max-width: 767px) { ' . $css_array['tablet'] . '}';
                $mobile = '@media only screen and (max-width: 500px) { ' . $css_array['mobile'] . '}';
                $all = $desktop . $tablet . $mobile;
                echo "<style id='divineblocks-frontend-styles'>$all</style>";
                error_log('all is ' . print_r($all, true));
                break;

        }


        if (isset($block['innerBlocks'])) {


            foreach ($block['innerBlocks'] as $j => $inner_block) {

                $this->get_our_block_styles($inner_block);
            }
        }

    }


    public function process_styles($blocks)
    {
        foreach ($blocks as $block) {
            $this->get_our_block_styles($block);
        }

    }
    public function divine_block_parse_block()
    {
        global $post;

        if ($post === null) {
            return;
        }
        $blocks = parse_blocks($post->post_content);

        $this->process_styles($blocks);


    }
}


Divine_Block_Class::get_instance();
