import React from "react";
import Tab from "./Tab";

interface TabsProps {
  activeKeyword: string;
  setActiveKeyword: (keyword: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeKeyword, setActiveKeyword }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "20px",
      borderBottom: `4px solid ${
        activeKeyword === "ルセラフィム"
          ? "red"
          : activeKeyword === "NewJeans"
          ? "orange"
          : "green"
      }`,
    }}
  >
    <Tab
      activeKeyword={activeKeyword}
      setActiveKeyword={setActiveKeyword}
      label="LE SSERAFIM"
      color="red"
      searchKeyword="ルセラフィム"
    />
    <Tab
      activeKeyword={activeKeyword}
      setActiveKeyword={setActiveKeyword}
      label="NewJeans"
      color="orange"
      searchKeyword="NewJeans"
    />
    <Tab
      activeKeyword={activeKeyword}
      setActiveKeyword={setActiveKeyword}
      label="aespa"
      color="green"
      searchKeyword="aespa"
    />
  </div>
);

export default Tabs;
