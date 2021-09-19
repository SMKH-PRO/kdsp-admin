import React from "react";
import { Grid, Avatar, Chip, Paper } from "@mui/material";
import { useHistory } from "react-router-dom";
import { doctorDetailsPath } from "../Navigation/routes";
const Client = ({ data, containerXs }) => {
  const history = useHistory();
  return (
    <Grid item xs={containerXs}>
      <Paper
        style={{ padding: 10 }}
        // onClick={() => history.push(doctorDetailsPath.replace(':id', data.id))}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
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
                <b>Age:</b> {data.age}
              </Grid>
              <Grid item xs={12}>
                <b>Phone#:</b> {data.phone}
              </Grid>
              <Grid item xs={12}>
                <b>type:</b> {data.type}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Client;
