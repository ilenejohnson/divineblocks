import { registerFormatType} from "@wordpress/rich-text";
import { BlockControls } from "@wordpress/block-editor";
import { ToolbarGroup, DropdownMenu } from "@wordpress/components";
import { useSelect } from '@wordpress/data';
/*
const HeaderButton = (props) => {


	const selectedBlock = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getSelectedBlock();
}, [] );



if ( selectedBlock && selectedBlock.name !== 'create-block/divineheaderblock' ) {
	return null;
}

  return (
    <BlockControls>
      <ToolbarGroup>
        <DropdownMenu
          icon="heading"
          label="Select a heading"
          controls={[
            {
              title: "H1",
              icon: "Heading",
              onClick: () => {
                props.onChange(
                  wp.richText.toggleFormat(props.value, {
                    type: "custom-h1/h1-output",
                  })
                );
              },
            },
            {
              title: "H2",
              icon: "Heading",

              onClick: () => {
                props.onChange(
                  wp.richText.toggleFormat(props.value, {
                    type: "custom-h2/h2-output",
                  })
                );
              },
            },
            {
              title: "H3",
              icon: "Heading",
              onClick: () => {
                props.onChange(
                  wp.richText.toggleFormat(props.value, {
                    type: "custom-h3/h3-output",
                  })
                );
              },
            },
            {
              title: "H4",
              icon: "Heading",
              onClick: () => {
                props.onChange(
                  wp.richText.toggleFormat(props.value, {
                    type: "custom-h4/h4-output",
                  })
                );
              },
            },
          ]}
        />
      </ToolbarGroup>
    </BlockControls>
  );
};
registerFormatType("custom-h2/h2-output", {
	title: "H2",
	tagName: "h2",
	className: null,
	//	edit: H2CustomButton,
});
registerFormatType("custom-h3/h3-output", {
	title: "H3",
	tagName: "h3",
	className: null,
	//	edit: H2CustomButton,
});
registerFormatType("custom-h4/h4-output", {
	title: "H4",
	tagName: "h4",
	className: null,
	//	edit: H2CustomButton,
});
registerFormatType("custom-h1/h1-output", {
	title: "H1",
	tagName: "h1",
	className: null,
	//	edit: H1CustomButton,
});

registerFormatType("divine-headers-menu/divine-header-output", {
  title: "Headers",
  tagName: "div",
  className: null,
  edit: HeaderButton,
});
*/
