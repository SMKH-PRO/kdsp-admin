import React from "react";

import { Typography, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import "./sidebar.css";
import ROUTES from "./../../Navigation/routes";
import LOGO from "./../../Assets/Images/logo.png";

import { useHistory } from "react-router";
const SideBar = ({ children, ...props }) => {
  const history = useHistory();
  const filteredRoute = ROUTES.filter((v) => v.visibleInSidebar);
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-logo-container">
          <img src={LOGO} height={50} />
        </div>
        <div className="sidebar-btn-container">
          {filteredRoute.map((route) => {
            return (
              <div key={route?.path} className="sidebar-btn">
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => history.push(route.path)}
                >
                  <route.icon />
                </IconButton>
              </div>
            );
          })}
        </div>
        <div className="sidebar-btn-container">
          <div className="sidebar-btn">
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => history.push("settings")}
            >
              <SettingsIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <main className="sidebar-main">{children}</main>
    </div>
  );
};

export default SideBar;
