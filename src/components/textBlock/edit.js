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
import { PanelBody } from "@wordpress/components";
import { useEffect } from "@wordpress/element";

import { useSetting, ContrastChecker } from "@wordpress/block-editor";
import { ShowFontTab } from "../../utils/fonttab";
import { ShowPaddingTab } from "../../utils/paddingtab";
import {
  capitals,
  options,
  fourArray,
  screen,
  txtalign,
} from "../../utils/values";
import {
  DivineRangeTab,
  DivineSelectTab,
  DivineColorPaletteTab,
  DivineRadioTab,
  setLocalEditScreen,
} from "../../utils/utils";
import { useSelect } from "@wordpress/data";

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
    console.log("props is ");

    attributes.unique_id === "" &&
      setAttributes({ unique_id: clientId.substr(2, 9) });
  }, []);

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
    let screenType = SetAllTheAttributes(
      args,
      attributes.border_size,
      "border_size",
    );
    setLocalEditScreen(screenType, "border-width", args);
  };

  const onChangeTextColor = (hexColor) => {
    setAttributes({ text_color: hexColor });
  };

  function ChangeTheSpacing(the_spacing, the_type, args) {
    let [newSize, row, side, theclass] = args;

    let string = "padding-" + fourArray[side];

    let data = theclass.split(" ");
    let newItems = "";
    jQuery(data).each(function () {
      newItems += "." + this + " ";
    });

    jQuery(newItems).css(string, newSize + "px");
    the_spacing[row][side] = newSize;

    setAttributes({ [the_type]: the_spacing });
  }

  const changePadding = (...args) => {
    //  let [newSize, row, side, theclass] = args;
    ChangeTheSpacing(
      attributes.padding.slice(),

      "padding",
      args,
    );
  };

  const changeMargins = (...args) => {
    ChangeTheSpacing(
      attributes.margins.slice(),

      "margins",
      args,
    );
  };

  function SetVisibility(newSize, x) {
    let c = "." + x;
    c = ".divine_blocks_class1_" + attributes.unique_id;
    if (newSize.localeCompare("none") === 0) jQuery(c).fadeTo("fast", 0.2);
    else jQuery(c).fadeTo("fast", 10);
  }
  const ChangeVisibility = (...args) => {
    let screenType = SetAllTheAttributes(args, attributes.display, "display");

    console.log("args 0 is " + args[0]);
    let c = ".divine_blocks_class1_" + attributes.unique_id;
    /*if (newSize.localeCompare("none") === 0) jQuery(c).fadeTo("fast", 0.2);
    else jQuery(c).fadeTo("fast", 10);*/
    jQuery(c).css("display", args[0]);
  };
  function LetterSpaceingHeightChange(
    the_attributes,
    the_type,
    the_css_type,
    args,
  ) {
    SetAllTheAttributes(args, the_attributes, the_type);
    let [newValue] = args;
    //"divine_blocks_class1_" + attributes.unique_id;
    let tempClass = ".divine_blocks_class1_" + attributes.unique_id + " p";
    jQuery(tempClass).css(the_css_type, newValue + "px");
  }
  const changeletterSpacing = (...args) => {
    LetterSpaceingHeightChange(
      attributes.letterSpacing,
      "letterSpacing",
      "letter-spacing",
      args,
    );
  };
  const changelineHeight = (...args) => {
    LetterSpaceingHeightChange(
      attributes.lineHeight,
      "lineHeight",
      "line-height",
      args,
    );
  };
  const changeBorderRadius = (...args) => {
    let screenType = SetAllTheAttributes(
      args,
      attributes.borderRadius,
      "borderRadius",
    );
    setLocalEditScreen(screenType, "border-radius", args);
  };

  const changeTheFontSize = (...args) => {
    let screenType = SetAllTheAttributes(
      args,
      attributes.the_font_sizes,
      "the_font_sizes",
    );
  };
  function SetAllTheAttributes(theArgs, theAttributeValue, theAttribute) {
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
    let screenType = SetAllTheAttributes(
      args,
      attributes.border_color,
      "border_color",
    );
    console.log("border color change " + screenType);
    console.dir(args);
    setLocalEditScreen(screenType, "border-color", args);
  };
  const changeTextTransform = (...args) => {
    let screenType = SetAllTheAttributes(
      args,
      attributes.textTransform,
      "textTransform",
    );
    setLocalEditScreen(screenType, "text-transform", args);
  };
  const changeTextAlign = (...args) => {
    let screenType = SetAllTheAttributes(
      args,
      attributes.textAlign,
      "textAlign",
    );
    setLocalEditScreen(screenType, "text-align", args);
  };
  const changeBorderStyle = (...args) => {
    let screenType = SetAllTheAttributes(
      args,
      attributes.borderStyle,
      "borderStyle",
    );

    setLocalEditScreen(screenType, "border-style", args);
  };

  const { deviceType } = useSelect((select) => {
    const { __experimentalGetPreviewDeviceType } = select("core/edit-post");

    return {
      deviceType: __experimentalGetPreviewDeviceType(),
    };
  }, []);
  const cssClassName =
    /* "device-wrapper device-wrapper--" +
    deviceType +*/
    "divine_blocks_class1_" + attributes.unique_id;
  console.log("attributes ");
  console.dir(attributes);
  SetVisibility(attributes.display[0], cssClassName);
  const blockProps = useBlockProps({
    //className: `device-wrapper device-wrapper--${deviceType}`,
    className: `${cssClassName}`,
  });

  const ff =
    ".device-wrapper--" +
    deviceType +
    " .divine_blocks_class1_" +
    attributes.unique_id;

  let demoClasses = document.querySelectorAll(ff);
  let dType;

  switch (deviceType) {
    case "Desktop":
      dType = screen["desktop"];
      setAttributes({ dType: screen["desktop"] });
      break;
    case "Tablet":
      dType = screen["tablet"];
      setAttributes({ dType: screen["tablet"] });
      break;
    case "Mobile":
      dType = screen["mobile"];
      setAttributes({ dType: screen["mobile"] });
      break;
  }

  demoClasses.forEach((box) => {
    box.style.fontSize = "87px";
  });

  return (
    <div {...blockProps}>
      <BlockControls>
        <AlignmentToolbar
          value={attributes.alignment}
          onChange={onChangeAlignment}
        />
      </BlockControls>

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

        <PanelBody title="Alignment" initialOpen={false}>
          <div className="inspectorTitles">Text align</div>
          <DivineSelectTab
            value={attributes.textAlign}
            func={changeTextAlign}
            class={cssClassName}
            options={txtalign}
          />
        </PanelBody>

        <PanelBody title="Fonts" initialOpen={false}>
          <div className="inspectorTitles">Font Sizes</div>
          <ShowFontTab
            value={attributes.the_font_sizes}
            func={changeTheFontSize}
            class={cssClassName}
            device={deviceType}
            unique_id={attributes.unique_id}
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
          borderColor: attributes.border_color[dType],
          borderStyle: attributes.borderStyle[dType],
          borderWidth: attributes.border_size[dType],
          paddingLeft: attributes.padding[dType][3],
          paddingBottom: attributes.padding[dType][2],
          paddingTop: attributes.padding[dType][0],
          paddingRight: attributes.padding[dType][1],

          marginLeft: attributes.margins[dType][3],
          marginBottom: attributes.margins[dType][2],
          marginTop: attributes.margins[dType][0],
          marginRight: attributes.margins[dType][1],

          letterSpacing: attributes.letterSpacing[dType],
          lineHeight: attributes.lineHeight[dType],
          textTransform: attributes.textTransform[dType],
          display: attributes.display[dType],
          textAlign: attributes.textAlign[dType],
          fontSize: attributes.the_font_sizes[dType],
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
