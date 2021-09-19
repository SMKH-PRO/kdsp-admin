import React from "react";
import { Grid, Avatar, Chip, Paper } from "@mui/material";
import { useHistory } from "react-router-dom";
import { doctorDetailsPath } from "../Navigation/routes";
const DoctorCard = ({ data, containerXs }) => {
  const history = useHistory();
  return (
    <Grid item xs={containerXs}>
      <Paper
        style={{ padding: 10 }}
        onClick={() => history.push(doctorDetailsPath.replace(':id', data.id))}
      >
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
                <b>Name:</b> {data.name}
              </Grid>
              <Grid item xs={12}>
                <b>Email:</b> {data.email}
              </Grid>
              <Grid item xs={12}>
                <b>Phone#:</b> {data.phoneNumber}
              </Grid>
              <Grid item xs={12}>
                <b>Location:</b> {data.location}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default DoctorCard;
