import React from "react";
import { SideBar, TopBar } from "../components";
import './userlayout.css'

const UserLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <SideBar/>
      </div>
      <div className="main-panel">
        <TopBar/>
        <div style={{ minHeight: "100vh" }}>{children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
