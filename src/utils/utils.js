import { TabPanel } from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import {
  RangeControl,
  ColorPalette,
  SelectControl,
  RadioControl,
} from "@wordpress/components";
import "./header";
const setLocalEditScreen = (screenType, element, args) => {
  let [newElement, placeholder, theClass] = args;

  let data = "divine_blocks_class1_" + attributes.unique_id;
  let newItems = "";
  jQuery(data).each(function () {
    newItems += "." + this + " ";
  });

  jQuery(newItems).css(element, newElement);
};
const DivineSelectTab = (props) => {
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
                <SelectControl
                  label="Desktop"
                  value={props.value[0]}
                  options={props.options}
                  onChange={(newValue) =>
                    props.func(newValue, "desktop", props.class)
                  }
                />
              </Fragment>
            );
          } else if ("tablet" === tab.name) {
            tabout = (
              <Fragment>
                <SelectControl
                  label="Tablet"
                  value={props.value[1]}
                  options={props.options}
                  onChange={(newValue) =>
                    props.func(newValue, "tablet", props.class)
                  }
                />
              </Fragment>
            );
          } else if ("mobile" === tab.name) {
            tabout = (
              <Fragment>
                <SelectControl
                  label="Mobile"
                  value={props.value[2]}
                  options={props.options}
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
const DivineColorPaletteTab = (props) => {
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
          console.log("props is ");
          console.dir(props);
          if ("desktop" === tab.name) {
            tabout = (
              <Fragment>
                <ColorPalette
                  colors={props.colors}
                  value={props.value[0]}
                  onChange={(newValue) =>
                    props.func(newValue, "desktop", props.class)
                  }
                />
              </Fragment>
            );
          } else if ("tablet" === tab.name) {
            tabout = (
              <Fragment>
                <ColorPalette
                  colors={props.colors}
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
                <ColorPalette
                  colors={props.colors}
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

const DivineRangeTab = (props) => {
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
                  label="Desktop"
                  initialPosition={props.initialPosition}
                  value={props.value[0]}
                  onChange={(newValue) =>
                    props.func(newValue, "desktop", props.class)
                  }
                  allowReset
                />
              </Fragment>
            );
          } else if ("tablet" === tab.name) {
            tabout = (
              <Fragment>
                <RangeControl
                  label="Tablet"
                  initialPosition={props.initialPosition}
                  value={props.value[1]}
                  onChange={(newValue) =>
                    props.func(newValue, "tablet", props.class)
                  }
                  allowReset
                />
              </Fragment>
            );
          } else if ("mobile" === tab.name) {
            tabout = (
              <Fragment>
                <RangeControl
                  label="Mobile"
                  initialPosition={props.initialPosition}
                  value={props.value[2]}
                  onChange={(newValue) =>
                    props.func(newValue, "mobile", props.class)
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

const DivineRadioTab = (props) => {
  console.dir(props);
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
                <RadioControl
                  label="Desktop"
                  help={props.label}
                  selected={props.selected[0]}
                  options={props.options}
                  onChange={(newValue) =>
                    props.func(newValue, "desktop", props.class)
                  }
                />
              </Fragment>
            );
          } else if ("tablet" === tab.name) {
            tabout = (
              <Fragment>
                <RadioControl
                  label="Tablet"
                  help={props.label}
                  selected={props.selected[1]}
                  options={props.options}
                  onChange={(newValue) =>
                    props.func(newValue, "tablet", props.class)
                  }
                />
              </Fragment>
            );
          } else if ("mobile" === tab.name) {
            tabout = (
              <Fragment>
                <RadioControl
                  label="Mobile"
                  help={props.label}
                  selected={props.selected[2]}
                  options={props.options}
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
const intialTab = () => {
  let xx = wp.data
    .select("core/edit-post")
    .__experimentalGetPreviewDeviceType();

  return xx.charAt(0).toLowerCase() + xx.slice(1);
};
const onChangeTab = (tab) => {
  let x = tab.charAt(0).toUpperCase() + tab.slice(1);
  console.log("x is " + x);
  wp.data.dispatch("core/edit-post").__experimentalSetPreviewDeviceType(x);
};

export { DivineRangeTab };
export { DivineColorPaletteTab };
export { DivineSelectTab };
export { DivineRadioTab };
export { setLocalEditScreen };
export { intialTab };
export { onChangeTab };
