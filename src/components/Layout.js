import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "240px", flex: 1,padding: "20px",backgroundColor:"#ebebeb" }}>{children}</div>
    </div>
  );
};

export default Layout;
