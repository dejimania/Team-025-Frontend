import React from "react";
import { useSelector } from "react-redux";
import { SideBar, TopBar } from "../components";
import './userlayout.css'

const UserLayout = ({ children }) => {

  const { show } = useSelector(state => state.sidebar)

  return (
    <div className="wrapper">
      <div className={show?"sidebar show":"sidebar"}>
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
