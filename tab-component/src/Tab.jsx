import React, { useContext } from "react";
import { TabContext } from "./TabContext";

function Tab({ value, children }) {
  const { selectedTab, handleTabChange } = useContext(TabContext);

  const onTabClick = () => {
    handleTabChange(value);
  };

  return (
    <div
      className={selectedTab === value ? "tab active" : "tab"}
      onClick={onTabClick}
    >
      {children}
    </div>
  );
}

export default Tab;
