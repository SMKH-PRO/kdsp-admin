import React, { useState } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Paper, Button, Grid, Chip, Avatar } from "@mui/material";
import { adddoctorsPath } from "../Navigation/routes";
import { Header } from "./../Components";
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
              <Grid item xs={4}>
                <Paper style={{ padding: 10 }} onClick={() => history.push(doctorDetailsPath)}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://img.etimg.com/thumb/msid-74986039,width-300,imgsize-99970,,resizemode-4,quality-100/thumb-75.jpg"
                        sx={{ width: 125, height: 125 }}
                        variant="square"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Grid container>
                        <Grid item xs={12}>
                          <b>Name:</b> {doctor.name}
                        </Grid>
                        <Grid item xs={12}>
                          <b>Email:</b> {doctor.email}
                        </Grid>
                        <Grid item xs={12}>
                          <b>Phone#:</b> {doctor.phoneNumber}
                        </Grid>
                        <Grid item xs={12}>
                          <b>Location:</b> {doctor.location}
                        </Grid>
                        <Grid item>
                          {doctor.ocupation.map((v) => {
                            return <Chip label={v} />;
                          })}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Doctor;
