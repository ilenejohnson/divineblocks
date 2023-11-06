<?php


class Divine_Block_Css
{
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
    public static function get_divine_text_block_css($attr, $id) {

		
	}


}
