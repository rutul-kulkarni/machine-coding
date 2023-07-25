import React, { useState } from "react";
import { TabContext } from "./TabContext";

function Tabs({ children }) {
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabChange = (newTab) => {
    setSelectedTab(newTab);
  };

  return (
    <TabContext.Provider value={{ selectedTab, handleTabChange }}>
      <div>{children}</div>
    </TabContext.Provider>
  );
}

export default Tabs;
