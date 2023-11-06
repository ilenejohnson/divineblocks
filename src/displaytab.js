displayTab = (tabinput) => {
  return (
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
        {
          tabinput;
        }
      }}
    </TabPanel>
  );
};
export { displayTab };
