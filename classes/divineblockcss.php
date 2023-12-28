<?php


class Divine_Block_Css
{
    public static function get_the_values($attrs, $field, $values)
    {
        $border_color_d =  isset($attrs[$field][0]) ? $attrs[$field][0] : $values[0];
        $border_color_t =  isset($attrs[$field][1]) ? $attrs[$field][1] : $values[1];
        $border_color_m =  isset($attrs[$field][2]) ? $attrs[$field][2] : $values[2];
        $rt[0] = $border_color_d;
        $rt[1] = $border_color_t;
        $rt[2] = $border_color_m;

        return $rt;
    }
    public static function get_divine_text_block_css($attrs, $id)
    {

        $className = ".divine_blocks_class1_" . $attrs['unique_id'];

        $padding_info = self::get_the_values(
            $attrs,
            'padding',
            [ ["0", "0", "0", "0"],
            ["0", "0", "0", "0"],
            ["0", "0", "0", "0"]]
        );
        $margin_info = self::get_the_values(
            $attrs,
            'margins',
            [ ["0", "0", "0", "0"],
            ["0", "0", "0", "0"],
            ["0", "0", "0", "0"]]
        );

        $bg_color = isset($attrs['bg_color']) ? $attrs['bg_color'] : "#ffffff";
        $color = isset($attrs['text_color']) ? $attrs['text_color'] : "#000000";
        $letter_spacing = self::get_the_values($attrs, 'letterSpacing', [0,0,0]);
        $line_height = self::get_the_values($attrs, 'lineHeight', [16,16,16]);
        $border_size = self::get_the_values($attrs, 'border_size', [0,0,0]);
        $display_element  = self::get_the_values($attrs, 'display', ["block","block","block"]);
        $text_transform = self::get_the_values($attrs, 'textTransform', ["none","none","none"]);
        $text_align = self::get_the_values($attrs, 'textAlign', ["left","left","left","left"]);

        $border_type = self::get_the_values($attrs, 'borderStyle', ["none","none","none"]);

        $border_info = self::get_the_values($attrs, 'border_color', ["#000000","#000000","#000000"]);

        $font_size = isset($attrs['the_font_sizes'][0]) ? $attrs['the_font_sizes'][0] : "16px";
        $font_size_tablet = isset($attrs['the_font_sizes'][1]) ? $attrs['the_font_sizes'][1] : "14px";
        $font_size_mobile = isset($attrs['the_font_sizes'][2]) ? $attrs['the_font_sizes'][2] : "8px";

        $font_size = self::get_the_values($attrs, 'the_font_sizes', ["16px","14px","8px"]);



        $border_radius = self::get_the_values($attrs, 'borderRadius', [3,3,3]);

        $css_desktop = $className . ' {';
        $css_desktop .= 'font-size: ' . $font_size[0] ;
        $css_desktop .= '; background-color: ' . $bg_color;
        $css_desktop .= '; color: ' . $color;

        $css_desktop .= '; padding: ' . $padding_info[0][0] . 'px ' . $padding_info[0][1] . 'px ' . $padding_info[0][2] . 'px ' . $padding_info[0][3] . 'px ' ;

        $css_desktop .= ';';
        $css_desktop .= 'letter-spacing: ' . $letter_spacing[0] . 'px ;';
        $css_desktop .= 'line-height: ' . $line_height[0] . 'px ;';
        $css_desktop .= 'border-radius: ' . $border_radius[0] . 'px ;';
        $css_desktop .= 'border-color: ' . $border_info[0] . ' ;';
        $css_desktop .= 'display: ' . $display_element[0] . ' ;';

        $css_desktop .= ' border-style:' . $border_type[0] . ' ;';
        $css_desktop .= 'border-width: ' . $border_size[0] . 'px ;';
        $css_desktop .= 'text-transform: ' . $text_transform[0] . ';';
        $css_desktop .= 'text-align: ' . $text_align[0] . ';';
        $css_desktop .=  '}';




        $css_tablet =  $className . ' {';

        $css_tablet .= 'font-size: ' . $font_size[1] ;
        $css_tablet .= '; padding: ' . $padding_info[1][0] . 'px ' . $padding_info[1][1] . 'px ' . $padding_info[1][2] . 'px ' . $padding_info[1][3] . 'px ' ;
        $css_tablet .= ';';
        $css_tablet .= '; margin: ' . $margin_info[1][0] . 'px ' . $margin_info[1][1] . 'px ' . $margin_info[1][2] . 'px ' . $margin_info[1][3] . 'px ' ;
        $css_tablet .= ';';
        $css_tablet .= 'letter-spacing: ' . $letter_spacing[1] . 'px ;';
        $css_tablet .= 'line-height: ' . $line_height[1] . 'px ;';
        $css_tablet .= 'border-radius: ' . $border_radius[1] . 'px ;';
        $css_tablet .= 'border-color: ' . $border_info[1] . ' ;';
        $css_tablet .= 'display: ' . $display_element[1] . ' ;';
        $css_tablet .= ' border-style:' . $border_type[1] . ' ;';
        $css_tablet .= 'border-width: ' . $border_size[1] . 'px ;';
        $css_tablet .= 'text-transform: ' . $text_transform[1] . ';';
        $css_tablet .= 'text-align: ' . $text_align[1] . ';';
        $css_tablet .= ' }';


        $css_mobile =  $className . ' {';
        $css_mobile .= 'font-size: ' . $font_size[2] ;
        $css_mobile .= '; padding: ' . $padding_info[2][0] . 'px ' . $padding_info[2][1] . 'px ' . $padding_info[2][2] . 'px ' . $padding_info[2][3] . 'px ' ;

        $css_mobile .= ';';
        $css_mobile .= 'letter-spacing: ' . $letter_spacing[2] . 'px ;';
        $css_mobile .= 'line-height: ' . $line_height[2] . 'px ;';
        $css_mobile .= 'border-radius: ' . $border_radius[2] . 'px ;';
        $css_mobile .= 'border-color: ' . $border_info[2] . ' ;';
        $css_mobile .= 'dislay: ' . $display_element[2] . ' ;';
        $css_mobile .= ' border-style:' . $border_type[2] . ' ;';
        $css_mobile .= 'border-width: ' . $border_size[2] . 'px ;';
        $css_mobile .= 'text-transform: ' . $text_transform[2] . ';';
        $css_mobile .= 'text-align: ' . $text_align[2] . ';';
        $css_mobile .= ' }';

        $all_css = array(
            'desktop' => $css_desktop,
        'tablet'  => $css_tablet,
        'mobile'  => $css_mobile,
    );
        return $all_css;




    }


}
