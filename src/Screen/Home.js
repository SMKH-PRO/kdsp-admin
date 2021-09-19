import React, { useState } from "react";

import { Container, Typography, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Header, DashboardChart } from "./../Components";
const Home = () => {
  const [modal, setModal] = useState(false);
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
      {/* <Typography>Home</Typography> */}
      <DashboardChart />
    </div>
  );
};

export default Home;
