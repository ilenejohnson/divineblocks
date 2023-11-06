/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
  useBlockProps,
  RichText,
  AlignmentToolbar,
  BlockControls,
  ColorPalette,
  InspectorControls,
  FontSizePicker,
} from "@wordpress/block-editor";
import { Fragment, useEffect } from "@wordpress/element";
import { TabPanel } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, clientId }, props) {

  const { deviceType } = useSelect((select) => {
    const { __experimentalGetPreviewDeviceType } = select("core/edit-post");

    return {
      deviceType: __experimentalGetPreviewDeviceType(),
    };
  }, []);

  
  useEffect(() => {
    //This conditional is useful to only set the id attribute once
    //when the component mounts for the first time

    attributes.unique_id === "" &&
      setAttributes({ unique_id: clientId.substr(2, 9) });
  }, []);

  const cssClassName = "divine_blocks_class_" + attributes.unique_id;

  const onChangeContent = (newContent) => {
    setAttributes({ content: newContent });
  };
  const onChangeAlignment = (newAlignment) => {
    setAttributes({
      alignment: newAlignment === undefined ? "none" : newAlignment,
    });
  };

  const onChangeBGColor = (hexColor) => {
    setAttributes({ bg_color: hexColor });
  };

  const onChangeTextColor = (hexColor) => {
    setAttributes({ text_color: hexColor });
  };



  const changeTheFontSize = (...args) => {
    const newSize = args[0];

    let the_font_sizes = attributes.the_font_sizes;

    const screen = {
      desktop: 0,
      tablet: 1,
      mobile: 2,
    };

    const newfontsize = the_font_sizes.map((value, index) => {
      if (index == screen[args[1]]) {
        return newSize;
      } else return value;
    });

    setAttributes({ the_font_sizes: newfontsize });
  };
  return (
    <div {...useBlockProps()}>
      {
        <BlockControls>
          <AlignmentToolbar
            value={attributes.alignment}
            onChange={onChangeAlignment}
          />
        </BlockControls>
      }
      <InspectorControls key="setting">
        <div>
          <TabPanel
            className="my-tab-panel"
            activeClass="active-tab"
            tabs={[
              {
                name: "desktop",

                className: "dashicon dashicons dashicons-desktop",
              },
              {
                name: "tablet",

                className: "dashicon dashicons dashicons-tablet",
              },
              {
                name: "mobile",

                className: "dashicon dashicons dashicons-smartphone",
              },
            ]}
          >
            {(tab) => {
              let tabout;
              if ("desktop" === tab.name) {
                tabout = (
                  <Fragment>
                    <FontSizePicker
                      value={attributes.the_font_sizes[0]}
                      onChange={(newValue) =>
                        changeTheFontSize(newValue, "desktop")
                      }
                    />
                  </Fragment>
                );
              } else if ("tablet" === tab.name) {
                tabout = (
                  <Fragment>
                    <FontSizePicker
                      value={attributes.the_font_sizes[1]}
                      onChange={(newValue) =>
                        changeTheFontSize(newValue, "tablet")
                      }
                    />
                  </Fragment>
                );
              } else if ("mobile" === tab.name) {
                tabout = (
                  <Fragment>
                    <FontSizePicker
                      value={attributes.the_font_sizes[2]}
                      onChange={(newValue) =>
                        changeTheFontSize(newValue, "mobile")
                      }
                    />
                  </Fragment>
                );
              }
              return <div id="divineblocks-controls">{tabout}</div>;
            }}
          </TabPanel>
        </div>
        <div id="divineblocks-controls">
          <fieldset>
            <legend className="blocks-base-control__label">
              {__("Background color", "divineblocks")}
            </legend>
            <ColorPalette // Element Tag for Gutenberg standard colour selector
              onChange={onChangeBGColor} // onChange event callback
            />
          </fieldset>
          <fieldset>
            <legend className="blocks-base-control__label">
              {__("Text color", "divineblocks")}
            </legend>
            <ColorPalette // Element Tag for Gutenberg standard colour selector
              onChange={onChangeTextColor} // onChange event callback
            />
          </fieldset>
        </div>
      </InspectorControls>

      <RichText
        style={{
          backgroundColor: attributes.bg_color,
          color: attributes.text_color,

          textAlign: attributes.alignment,

          keepPlaceholderOnFocus: true,
        }}
        className={cssClassName}
        tagName="div"
        multiline="p"
        onChange={onChangeContent}
        value={attributes.content}
        placeholder={__("Enter Text...")}
      />
    </div>
  );
}
