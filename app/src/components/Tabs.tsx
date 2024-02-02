import React from "react";
import Tab from "./Tab";
import { colors, tabs } from "./tabConfig";

interface TabsProps {
  activeKeyword: string;
  setActiveKeyword: (keyword: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeKeyword, setActiveKeyword }) => {
  const color = colors[activeKeyword] || colors["default"];
  const classes = `flex flex-nowrap justify-start mb-5 border-b-4 ${color.border} overflow-x-auto scrollbar-hide`;

  return (
    <div className={classes}>
      {tabs.map((tab) => (
        <Tab
          key={tab.searchKeyword}
          activeKeyword={activeKeyword}
          setActiveKeyword={setActiveKeyword}
          label={tab.label}
          searchKeyword={tab.searchKeyword}
        />
      ))}
    </div>
  );
};

export default Tabs;
