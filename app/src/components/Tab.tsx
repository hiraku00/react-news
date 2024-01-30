import React from "react";

interface TabProps {
  activeKeyword: string;
  setActiveKeyword: (keyword: string) => void;
  label: string;
  color: string;
  searchKeyword: string;
}

const Tab: React.FC<TabProps> = ({
  activeKeyword,
  setActiveKeyword,
  label,
  color,
  searchKeyword,
}) => (
  <div
    onClick={() => setActiveKeyword(searchKeyword)}
    style={{
      cursor: "pointer",
      marginTop: activeKeyword === searchKeyword ? "-4px" : "0px",
      borderTop:
        activeKeyword === searchKeyword ? `4px solid ${color}` : "none",
      color: "white",
      paddingBottom: "9px",
      backgroundColor: color,
      borderRadius: "5px",
      padding: "5px",
      flex: 1,
      textAlign: "center",
    }}
  >
    {label}
  </div>
);

export default Tab;
