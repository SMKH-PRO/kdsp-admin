import React from "react";

import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import "./header.css";

const Header = ({ title, rightComponent }) => {
  return (
    <div className="header-container">
      <div className="header-child">
        <Typography variant="h4">{title}</Typography>
      </div>
      <div className="header-right-container">
        {Boolean(rightComponent) && rightComponent}
        <div className="header-right">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 45, height: 45 }}
          />
          <div className="user-details">
            <Typography variant="subtitle2">ABDUL HASEEB</Typography>
            <Typography variant="caption">ONLINE</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
