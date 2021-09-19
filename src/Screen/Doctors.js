import React, { useState } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Paper, Button, Grid, Chip, Avatar } from "@mui/material";
import { adddoctorsPath } from "../Navigation/routes";
import { Header, DoctorCard } from "./../Components";
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

const Doctor = (props) => {
  console.log("props", props);
  const classes = useStyles(props);
  const history = useHistory()
  const doctors = useSelector((state) => state.doctorReducer.doctors);
  return (
    <div>
      <Header
        title="doctors list"
        rightComponent={
          <Button
            startIcon={<AddIcon />}
            onClick={() => props?.history?.push(adddoctorsPath)}
          >
            Add Doctor
          </Button>
        }
      />
      <div className="content-container">
        <Grid container spacing={2}>
          {doctors.map((doctor) => {
            return (
             <DoctorCard data={doctor} containerXs={4}/>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Doctor;
