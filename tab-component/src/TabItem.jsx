import React, { useContext } from "react";
import { TabContext } from "./TabContext";

function TabItem({ value, children }) {
  const { selectedTab } = useContext(TabContext);

  return selectedTab === value ? <div>{children}</div> : null;
}

export default TabItem;
