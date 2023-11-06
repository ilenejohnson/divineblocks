<?php
/**
 * Plugin Name:       Divineblocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
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
    }


    public function __construct()
    {

        add_action('init', array($this, 'create_block_divineblocks_block_init'));

        add_action('wp_head', array($this,'make_the_css'), 100);


    }

    public function make_the_css()
    {
        $this->divine_block_parse_block();
    }

    private function get_the_values($attrs, $field, $values)
    {
        $border_color_d =  isset($attrs[$field][0]) ? $attrs[$field][0] : $values[0];
        $border_color_t =  isset($attrs[$field][1]) ? $attrs[$field][1] : $values[1];
        $border_color_m =  isset($attrs[$field][2]) ? $attrs[$field][2] : $values[2];
        $rt[0] = $border_color_d;
        $rt[1] = $border_color_t;
        $rt[2] = $border_color_m;

        return $rt;
    }
    private function _setup_the_class($attrs)
    {
        $className = "divine_blocks_class1_" . $attrs['unique_id'];




        $padding_info = $this->get_the_values(
            $attrs,
            'padding',
            [ ["0", "0", "0", "0"],
            ["0", "0", "0", "0"],
            ["0", "0", "0", "0"]]
        );
        $margin_info = $this->get_the_values(
            $attrs,
            'margins',
            [ ["0", "0", "0", "0"],
            ["0", "0", "0", "0"],
            ["0", "0", "0", "0"]]
        );
        error_log('in set up the class');

        $letter_spacing = $this->get_the_values($attrs, 'letterSpacing', [0,0,0]);
        $line_height = $this->get_the_values($attrs, 'lineHeight', [16,16,16]);
        $border_size = $this->get_the_values($attrs, 'border_size', [0,0,0]);
        $display_element  = $this->get_the_values($attrs, 'display', ["inline-block","inline-block","inline-block"]);
        $text_transform = $this->get_the_values($attrs, 'textTransform', ["none","none","none"]);
        $text_align = $this->get_the_values($attrs, 'textAlign', ["left","left","left","left"]);

        $border_type = $this->get_the_values($attrs, 'borderStyle', ["none","none","none"]);

        $border_info = $this->get_the_values($attrs, 'border_color', ["#000000","#000000","#000000"]);



        $font_size = isset($attrs['the_font_sizes'][0]) ? $attrs['the_font_sizes'][0] : "16px";
        $font_size_tablet = isset($attrs['the_font_sizes'][1]) ? $attrs['the_font_sizes'][1] : "14px";
        $font_size_mobile = isset($attrs['the_font_sizes'][2]) ? $attrs['the_font_sizes'][2] : "8px";

        $font_size = $this->get_the_values($attrs, 'the_font_sizes', ["16px","14px","8px"]);
        error_log('font size is ' . print_r($font_size, true));


        $border_radius = $this->get_the_values($attrs, 'borderRadius', [3,3,3]);


        $css = '@media only screen and (min-width: 768px) { .' . $className . ' {';
        $css .= 'font-size: ' . $font_size[0] ;
        $css .= '; padding: ' . $padding_info[0][0] . 'px ' . $padding_info[0][1] . 'px ' . $padding_info[0][2] . 'px ' . $padding_info[0][3] . 'px ' ;

        $css .= ';';
        $css .= 'letter-spacing: ' . $letter_spacing[0] . 'px ;';
        $css .= 'line-height: ' . $line_height[0] . 'px ;';
        $css .= 'border-radius: ' . $border_radius[0] . 'px ;';
        $css .= 'border-color: ' . $border_info[0] . ' ;';
        $css .= 'display: ' . $display_element[0] . ' ;';

        $css .= ' border-style:' . $border_type[0] . ' ;';
        $css .= 'border-width: ' . $border_size[0] . 'px ;';
        $css .= 'text-transform: ' . $text_transform[0] . ';';
        $css .=  '}';
        $css .= '} ';





        $css .= '@media only screen and (max-width: 767px) { .' . $className . ' {';
        $css .= 'font-size: ' . $font_size[1] ;
        $css .= '; padding: ' . $padding_info[1][0] . 'px ' . $padding_info[1][1] . 'px ' . $padding_info[1][2] . 'px ' . $padding_info[1][3] . 'px ' ;
        $css .= ';';
        $css .= '; margin: ' . $margin_info[1][0] . 'px ' . $margin_info[1][1] . 'px ' . $margin_info[1][2] . 'px ' . $margin_info[1][3] . 'px ' ;
        $css .= ';';
        $css .= 'letter-spacing: ' . $letter_spacing[1] . 'px ;';
        $css .= 'line-height: ' . $line_height[1] . 'px ;';
        $css .= 'border-radius: ' . $border_radius[1] . 'px ;';
        $css .= 'border-color: ' . $border_info[1] . ' ;';
        $css .= 'display: ' . $display_element[1] . ' ;';
        $css .= ' border-style:' . $border_type[1] . ' ;';
        $css .= 'border-width: ' . $border_size[1] . 'px ;';
        $css .= 'text-transform: ' . $text_transform[1] . ';';
        $css .= ' }';

        $css .= '} ';
        $css .= '@media only screen and (max-width: 500px) { .' . $className . ' {';
        $css .= 'font-size: ' . $font_size[2] ;
        $css .= '; padding: ' . $padding_info[2][0] . 'px ' . $padding_info[2][1] . 'px ' . $padding_info[2][2] . 'px ' . $padding_info[2][3] . 'px ' ;

        $css .= ';';
        $css .= 'letter-spacing: ' . $letter_spacing[2] . 'px ;';
        $css .= 'line-height: ' . $line_height[2] . 'px ;';
        $css .= 'border-radius: ' . $border_radius[2] . 'px ;';
        $css .= 'border-color: ' . $border_info[2] . ' ;';
        $css .= 'dislay: ' . $display_element[2] . ' ;';
        $css .= ' border-style:' . $border_type[2] . ' ;';
        $css .= 'border-width: ' . $border_size[2] . 'px ;';
        $css .= 'text-transform: ' . $text_transform[2] . ';';
        $css .= ' }';
        $css .= '}';

        error_log('css is ' . $css);




        echo "<style id='divineblocks-frontend-styles'>$css</style>";
    }

    private function _setup_header_class($attrs)
    {
        $className = "divine_blocks_class_" . $attrs['unique_id'];




        $padding_info = $this->get_the_values(
            $attrs,
            'padding',
            [ ["0", "0", "0", "0"],
            ["0", "0", "0", "0"],
            ["0", "0", "0", "0"]]
        );
        $margin_info = $this->get_the_values(
            $attrs,
            'margins',
            [ ["0", "0", "0", "0"],
            ["0", "0", "0", "0"],
            ["0", "0", "0", "0"]]
        );


        $letter_spacing = $this->get_the_values($attrs, 'letterSpacing', [0,0,0]);
        $line_height = $this->get_the_values($attrs, 'lineHeight', [16,16,16]);
        $border_size = $this->get_the_values($attrs, 'border_size', [0,0,0]);
        $display_element  = $this->get_the_values($attrs, 'display', ["inline-block","inline-block","inline-block"]);
        $text_transform = $this->get_the_values($attrs, 'textTransform', ["none","none","none"]);

        $border_type = $this->get_the_values($attrs, 'borderStyle', ["none","none","none"]);

        $border_info = $this->get_the_values($attrs, 'border_color', ["#000000","#000000","#000000"]);



        /* $font_size = isset($attrs['the_font_sizes'][0]) ? $attrs['the_font_sizes'][0] : "26px";
         $font_size_tablet = isset($attrs['the_font_sizes'][1]) ? $attrs['the_font_sizes'][1] : "24px";
         $font_size_mobile = isset($attrs['the_font_sizes'][2]) ? $attrs['the_font_sizes'][2] : "18px";
*/
        $font_size = $this->get_the_values($attrs, 'the_font_sizes', ["26px","24px","18px"]);

        $border_radius = $this->get_the_values($attrs, 'borderRadius', [3,3,3]);


        $css = '@media only screen and (min-width: 768px) { .' . $className . ' {';
        $css .= 'font-size: ' . $font_size[0] ;
        $css .= '; padding: ' . $padding_info[0][0] . 'px ' . $padding_info[0][1] . 'px ' . $padding_info[0][2] . 'px ' . $padding_info[0][3] . 'px ' ;

        $css .= ';';
        $css .= 'letter-spacing: ' . $letter_spacing[0] . 'px ;';
        $css .= 'line-height: ' . $line_height[0] . 'px ;';
        $css .= 'border-radius: ' . $border_radius[0] . 'px ;';
        $css .= 'border-color: ' . $border_info[0] . ' ;';
        $css .= 'display: ' . $display_element[0] . ' ;';

        $css .= ' border-style:' . $border_type[0] . ' ;';
        $css .= 'border-width: ' . $border_size[0] . 'px ;';
        $css .= 'text-transform: ' . $text_transform[0] . ';';
        $css .= 'text-align: ' . $text_align[0] . ';';
        $css .=  '}';
        $css .= '} ';
        $css .= '@media only screen and (max-width: 767px) { .' . $className . ' {';
        $css .= 'font-size: ' . $font_size[1] ;
        $css .= '; padding: ' . $padding_info[1][0] . 'px ' . $padding_info[1][1] . 'px ' . $padding_info[1][2] . 'px ' . $padding_info[1][3] . 'px ' ;
        $css .= ';';
        $css .= '; margin: ' . $margin_info[1][0] . 'px ' . $margin_info[1][1] . 'px ' . $margin_info[1][2] . 'px ' . $margin_info[1][3] . 'px ' ;
        $css .= ';';
        $css .= 'letter-spacing: ' . $letter_spacing[1] . 'px ;';
        $css .= 'line-height: ' . $line_height[1] . 'px ;';
        $css .= 'border-radius: ' . $border_radius[1] . 'px ;';
        $css .= 'border-color: ' . $border_info[1] . ' ;';
        $css .= 'display: ' . $display_element[1] . ' ;';
        $css .= ' border-style:' . $border_type[1] . ' ;';
        $css .= 'border-width: ' . $border_size[1] . 'px ;';
        $css .= 'text-transform: ' . $text_transform[1] . ';';
        $css .= 'text-align: ' . $text_align[1] . ';';
        $css .= ' }';

        $css .= '} ';
        $css .= '@media only screen and (max-width: 500px) { .' . $className . ' {';
        $css .= 'font-size: ' . $font_size[2] ;
        $css .= '; padding: ' . $padding_info[2][0] . 'px ' . $padding_info[2][1] . 'px ' . $padding_info[2][2] . 'px ' . $padding_info[2][3] . 'px ' ;

        $css .= ';';
        $css .= 'letter-spacing: ' . $letter_spacing[2] . 'px ;';
        $css .= 'line-height: ' . $line_height[2] . 'px ;';
        $css .= 'border-radius: ' . $border_radius[2] . 'px ;';
        $css .= 'border-color: ' . $border_info[2] . ' ;';
        $css .= 'dislay: ' . $display_element[2] . ' ;';
        $css .= ' border-style:' . $border_type[2] . ' ;';
        $css .= 'border-width: ' . $border_size[2] . 'px ;';
        $css .= 'text-transform: ' . $text_transform[2] . ';';
        $css .= 'text-align: ' . $text_align[2] . ';';
        $css .= ' }';
        $css .= '}';


        error_log('css in header class is ' . $css);
        //  wp_add_inline_style('divine_blocks_css_handle', $css);
        echo "<style id='divineblocks-frontend-styles'>$css</style>";
    }


    public function get_our_block_styles($block)
    {

        if (strcmp($block['blockName'], 'create-block/divinetextblock') == 0) {

            // error_log('we got our block name ' . $block['blockName']);
            $this->_setup_the_class($block['attrs']);
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
