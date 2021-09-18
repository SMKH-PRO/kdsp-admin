import React from "react";

import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import "./header.css";

const Header = ({ title }) => {
  return (
    <div className="header-container">
      <div className="header-child">
        <Typography variant="h4">{title}</Typography>
      </div>
      <div className="header-right">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 50, height: 50 }}
        />
        <div className="user-details">
          <Typography variant="caption">ABDUL HASEEB</Typography>
          <Typography variant="caption">ONLINE</Typography>
        </div>
      </div>
    </div>
  );
};

export default Header;
