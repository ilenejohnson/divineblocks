import { TabPanel, RangeControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import { screen } from "./values";
import { intialTab } from "./utils";
import { onChangeTab } from "./utils";

const ShowPaddingTab = (props) => {
  const paddingArray = {
    top: 0,
    right: 1,
    bottom: 2,
    left: 3,
  };
  console.log("value " + props.value[screen["desktop"]][paddingArray["left"]]);

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
                <RangeControl
                  label="top"
                  initialPosition={0}
                  value={props.value[screen["desktop"]][paddingArray["top"]]}
                  onChange={(newValue) =>
                    props.func(
                      newValue,
                      screen["desktop"],
                      paddingArray["top"],
                      props.class,
                    )
                  }
                  allowReset
                />
                <RangeControl
                  label="right"
                  initialPosition={0}
                  value={props.value[screen["desktop"]][paddingArray["right"]]}
                  onChange={(newValue) =>
                    props.func(
                      newValue,
                      screen["desktop"],
                      paddingArray["right"],
                      props.class,
                    )
                  }
                  allowReset
                />
                <RangeControl
                  label="bottom"
                  initialPosition={0}
                  value={props.value[screen["desktop"]][paddingArray["bottom"]]}
                  onChange={(newValue) =>
                    props.func(
                      newValue,
                      screen["desktop"],
                      paddingArray["bottom"],
                      props.class,
                    )
                  }
                  allowReset
                />

                <RangeControl
                  label="left"
                  initialPosition={0}
                  value={props.value[screen["desktop"]][paddingArray["left"]]}
                  onChange={(newValue) =>
                    props.func(
                      newValue,
                      screen["desktop"],
                      paddingArray["left"],
                      props.class,
                    )
                  }
                  allowReset
                />
              </Fragment>
            );
          } else if ("tablet" === tab.name) {
            tabout = (
              <Fragment>
                <RangeControl
                  label="top"
                  initialPosition={0}
                  value={props.value[screen["tablet"]][paddingArray["top"]]}
                  onChange={(newValue) =>
                    props.func(
                      newValue,
                      screen["tablet"],
                      paddingArray["top"],
                      props.class,
                    )
                  }
                  allowReset
                />
                <RangeControl
                  label="right"
                  initialPosition={0}
                  value={props.value[screen["tablet"]][paddingArray["right"]]}
                  onChange={(newValue) =>
                    props.func(
                      newValue,
                      screen["tablet"],
                      paddingArray["right"],
                      props.class,
                    )
                  }
                  allowReset
                />
                <RangeControl
                  label="bottom"
                  initialPosition={0}
                  value={props.value[screen["tablet"]][paddingArray["bottom"]]}
                  onChange={(newValue) =>
                    props.func(
                      newValue,
                      screen["tablet"],
                      paddingArray["bottom"],
                      props.class,
                    )
                  }
                  allowReset
                />

                <RangeControl
                  label="left"
                  initialPosition={0}
                  value={props.value[screen["tablet"]][paddingArray["left"]]}
                  onChange={(newValue) =>
                    props.func(
                      newValue,
                      screen["tablet"],
                      paddingArray["left"],
                      props.class,
                    )
                  }
                  allowReset
                />
              </Fragment>
            );
          } else if ("mobile" === tab.name) {
            tabout = (
              <Fragment>
                <RangeControl
                  label="top"
                  initialPosition={0}
                  value={props.value[screen["mobile"]][paddingArray["top"]]}
                  onChange={(newValue) =>
                    props.func(
                      newValue,
                      screen["mobile"],
                      paddingArray["top"],
                      props.class,
                    )
                  }
                  allowReset
                />

                <RangeControl
                  label="right"
                  initialPosition={0}
                  value={props.value[screen["mobile"]][paddingArray["right"]]}
                  onChange={(newValue) =>
                    props.func(
                      newValue,
                      screen["mobile"],
                      paddingArray["right"],
                      props.class,
                    )
                  }
                  allowReset
                />
                <RangeControl
                  label="bottom"
                  initialPosition={0}
                  value={props.value[screen["mobile"]][paddingArray["bottom"]]}
                  onChange={(newValue) =>
                    props.func(
                      newValue,
                      screen["mobile"],
                      paddingArray["bottom"],
                      props.class,
                    )
                  }
                  allowReset
                />

                <RangeControl
                  label="left"
                  initialPosition={0}
                  value={props.value[screen["mobile"]][paddingArray["left"]]}
                  onChange={(newValue) =>
                    props.func(
                      newValue,
                      screen["mobile"],
                      paddingArray["left"],
                      props.class,
                    )
                  }
                  allowReset
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
export { ShowPaddingTab };
