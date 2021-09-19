import React, { useState } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Paper, Button, Grid, Chip, Avatar } from "@mui/material";
import { adddoctorsPath } from "../Navigation/routes";
import { Header, ClientCard } from "./../Components";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";  
import { doctorDetailsPath } from "../Navigation/routes";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

const Clients = (props) => {
  console.log("props", props);
  const classes = useStyles(props);
  const history = useHistory()
  const clients = useSelector((state) => state.clientReducer.clients);
  return (
    <div>
      <Header
        title="Client list"
      
      />
      <div className="content-container">
        <Grid container spacing={2}>
          {clients.map((doctor) => {
            return (
             <ClientCard data={doctor} containerXs={3} isClient/>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Clients;
