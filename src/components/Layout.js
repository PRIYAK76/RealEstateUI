import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div
        style={{
          marginLeft: "240px",
          flex: 1,
          padding: "20px",
          backgroundColor: "#ebebeb",
          minHeight: "100vh",
          boxSizing: "border-box"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
