/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __, _x } from "@wordpress/i18n";

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
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";
import {
  PanelBody,
  ToolbarGroup,
  ToolbarDropdownMenu,
} from "@wordpress/components";
import { useEffect } from "@wordpress/element";

import { useSetting, ContrastChecker } from "@wordpress/block-editor";
import { ShowFontTab } from "../../utils/fonttab";
import { ShowPaddingTab } from "../../utils/paddingtab";
import { capitals, options, fourArray, screen } from "../../utils/values";

import {
  DivineRangeTab,
  DivineSelectTab,
  DivineColorPaletteTab,
  DivineRadioTab,
} from "../../utils/utils";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "../../editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, clientId }, props) {
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

  const changeBorderWidth = (...args) => {
    let screenType = makeStyleChanges(
      args,
      attributes.border_size,
      "border_size",
    );
    if (screenType === 0) {
      let c = "." + args[2];

      jQuery(c).css("border-width", args[0]);
    }
  };

  const onChangeTextColor = (hexColor) => {
    setAttributes({ text_color: hexColor });
  };
  const changePadding = (...args) => {
    let [newSize, row, side, theclass] = args;

    let the_padding = attributes.padding.slice();
    if (row == 0) {
      let string = "padding-" + fourArray[side];

      let c = "." + theclass;
      jQuery(c).css(string, newSize + "px");
    }
    the_padding[row][side] = newSize;

    setAttributes({ padding: the_padding });
  };

  const changeMargins = (...args) => {
    let [newSize, row, side, theclass] = args;
    let the_padding = attributes.margins.slice();
    if (row == 0) {
      let string = "margin-" + fourArray[side];

      let c = "." + theclass;
      jQuery(c).css(string, newSize + "px");
    }
    the_padding[row][side] = newSize;

    setAttributes({ margins: the_padding });
  };

  function SetVisibility(newSize, x) {
    let c = "." + x;

    if (newSize.localeCompare("none") === 0) jQuery(c).fadeTo("fast", 0.2);
    else jQuery(c).fadeTo("fast", 10);
  }
  const ChangeVisibility = (...args) => {
    let screenType = makeStyleChanges(args, attributes.display, "display");

    if (screenType === 0) {
      const newSize = args[0];

      SetVisibility(newSize, args[2]);
    }
  };

  const changeletterSpacing = (...args) => {
    let screenType = makeStyleChanges(
      args,
      attributes.letterSpacing,
      "letterSpacing",
    );
    if (screenType === 0) {
      let c = "." + args[2];

      jQuery(c).css("letter-spacing", args[0]);
    }
  };
  const changelineHeight = (...args) => {
    let screenType = makeStyleChanges(
      args,
      attributes.lineHeight,
      "lineHeight",
    );
    if (screenType === 0) {
      let c = "." + args[2];

      jQuery(c).css("line-height", args[0]);
    }
  };
  const changeBorderRadius = (...args) => {
    let screenType = makeStyleChanges(
      args,
      attributes.borderRadius,
      "borderRadius",
    );
    if (screenType === 0) {
      let c = "." + args[2];

      jQuery(c).css("border-radius", args[0]);
    }
  };

  const changeTheFontSize = (...args) => {
    let screenType = makeStyleChanges(
      args,
      attributes.the_font_sizes,
      "the_font_sizes",
    );

    if (screenType === 0) {
      let c = "." + args[2];

      jQuery(c).css("font-size", args[0]);
    }
  };
  function makeStyleChanges(theArgs, theAttributeValue, theAttribute) {
    let [newValue, type] = theArgs;
    //  const newValue = theArgs[0];

    const nv = theAttributeValue.map((value, index) => {
      if (index == screen[type]) {
        return newValue;
      } else return value;
    });

    setAttributes({ [theAttribute]: nv });
    return screen[type];
  }
  const changeBorderColor = (...args) => {
    let screenType = makeStyleChanges(
      args,
      attributes.border_color,
      "border_color",
    );
    console.dir("screen type " + screenType);
    if (screenType === 0) {
      let c = "." + args[2];
      console.dir(args);
      jQuery(c).css("border-color", args[0]);
    }
  };
  const changeTextTransform = (...args) => {
    let screenType = makeStyleChanges(
      args,
      attributes.textTransform,
      "textTransform",
    );
    if (screenType === 0) {
      let c = "." + args[2];

      jQuery(c).css("text-transform", args[0]);
    }
  };
  const changeBorderStyle = (...args) => {
    let screenType = makeStyleChanges(
      args,
      attributes.borderStyle,
      "borderStyle",
    );
    //  if (screenType === 0) {
    let c = "." + args[2];

    jQuery(c).css("border-style", args[0]);
    //   }
  };

  SetVisibility(attributes.display[0], cssClassName);

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
      <InspectorControls key="inspector">
        <PanelBody title="Visibility" initialOpen={false}>
          <DivineRadioTab
            label="Visibility"
            selected={attributes.display}
            options={[
              { label: "Show", value: "inline-block" },
              { label: "Hide", value: "none" },
            ]}
            func={ChangeVisibility}
            class={cssClassName}
          />
        </PanelBody>
        <PanelBody title="Spacing" initialOpen={false}>
          <div className="inspectorTitles">Padding</div>
          <ShowPaddingTab
            value={attributes.padding}
            func={changePadding}
            class={cssClassName}
          />

          <div className="inspectorTitles">Margins</div>
          <ShowPaddingTab
            value={attributes.margins}
            func={changeMargins}
            class={cssClassName}
          />
        </PanelBody>
        <PanelBody title="Border" initialOpen={false}>
          <div>
            <div className="inspectorTitles">Border Color</div>
            <DivineColorPaletteTab
              value={attributes.border_color}
              colors={[...useSetting("color.palette.default")]}
              func={changeBorderColor}
              class={cssClassName}
            />

            <div className="inspectorTitles">Border Width</div>
            <DivineRangeTab
              value={attributes.border_size}
              func={changeBorderWidth}
              class={cssClassName}
              initialPosition={0}
            />

            <div className="inspectorTitles">Border Radius</div>
            <DivineRangeTab
              value={attributes.borderRadius}
              func={changeBorderRadius}
              class={cssClassName}
              initialPosition={3}
            />
            <div className="inspectorTitles">Border Types</div>
            <DivineSelectTab
              value={attributes.borderStyle}
              func={changeBorderStyle}
              class={cssClassName}
              options={options}
            />
          </div>
        </PanelBody>
        <PanelBody title="Fonts" initialOpen={false}>
          <div className="inspectorTitles">Font Sizes</div>
          <ShowFontTab
            value={attributes.the_font_sizes}
            func={changeTheFontSize}
            class={cssClassName}
          />

          <div className="inspectorTitles">Letter Spacing</div>
          <DivineRangeTab
            value={attributes.letterSpacing}
            func={changeletterSpacing}
            class={cssClassName}
            initialPosition={0}
          />
          <div className="inspectorTitles">Line Height</div>
          <DivineRangeTab
            value={attributes.lineHeight}
            func={changelineHeight}
            class={cssClassName}
            initialPosition={16}
          />

          <div className="inspectorTitles">Text Transform</div>
          <DivineSelectTab
            value={attributes.textTransform}
            func={changeTextTransform}
            class={cssClassName}
            options={capitals}
          />
        </PanelBody>

        <div>
          <PanelColorSettings
            title={__("Color", "divineblock")}
            initialOpen={false}
            colors={[...useSetting("color.palette.theme")]}
            colorSettings={[
              {
                value: attributes.text_color,
                onChange: onChangeTextColor,
                label: __("Text Color"),
              },
              {
                value: attributes.bg_color,
                onChange: onChangeBGColor,
                label: __("Background Color"),
              },
            ]}
          />
        </div>
        <div>
          <ContrastChecker
            backgroundColor={attributes.bg_color}
            textColor={attributes.text_color}
          />
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
        tagName="h4"
        onChange={onChangeContent}
        value={attributes.content}
        placeholder={__("Enter Text...")}
      />
    </div>
  );
}
