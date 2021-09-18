import React, { useState } from "react";

import { Container, Typography, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Header } from "./../Components";
const Home = () => {
  return (
    <div>
      <Header
        title="Home"
        rightComponent={
          <IconButton>
            <SearchIcon />
          </IconButton>
        }
      />
      <Typography>Home</Typography>
    </div>
  );
};

export default Home;
