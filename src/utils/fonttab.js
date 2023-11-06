import { TabPanel } from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import { FontSizePicker } from "@wordpress/block-editor";
import {intialTab}  from "./utils"
import {onChangeTab}  from "./utils"

const ShowFontTab = (props) => {
  const fallbackFontSize = 16;
	let tempClass =
	".device-wrapper--" +
	props.device +
	" .divine_blocks_class_" +
	props.unique_id

	

  return (

    <div>
      <TabPanel
        className="my-tab-panel"
        activeClass="active-tab"
				initialTabName={intialTab}
				onSelect={onChangeTab}
        tabs={[
          {
            name: "desktop",

            className: "icons-general icons-desktop",
          },
          {
            name: "tablet",

            className: "icons-general icons-tablet",
          },
          {
            name: "mobile",

						className: "icons-general icons-mobile",
          },
        ]}
      >
        {(tab) => {
          let tabout;

          if ("desktop" === tab.name) {
            tabout = (
              <Fragment>
                <FontSizePicker
                  value={props.value[0]}
                  fallbackFontSize={fallbackFontSize}
                  onChange={(newValue) =>
                    props.func(newValue, "desktop", props.class)
                  }
                  min={0}
                />
              </Fragment>
            );
          } else if ("tablet" === tab.name) {

            tabout = (
              <Fragment>
                <FontSizePicker
                  fallbackFontSize="14"
                  value={props.value[1]}
                  onChange={(newValue) =>
                    props.func(newValue, "tablet", props.class)
                  }
                />
              </Fragment>
            );
          } else if ("mobile" === tab.name) {

            tabout = (
              <Fragment>
                <FontSizePicker
                  fallbackFontSize="8"
                  value={props.value[2]}
                  onChange={(newValue) =>
                    props.func(newValue, "mobile", props.class)
                  }
                />
              </Fragment>
            );
          }
          return <div id="divineblocks-controls">{tabout}</div>;
        }}
      </TabPanel>
    </div>
  );
};
export { ShowFontTab };
