import React, { useState } from "react";

import { Container, TextField, Paper, Grid } from "@mui/material";
import { Header } from "./../Components";
import { createStyles, makeStyles } from "@mui/styles";
import Autocomplete from "@mui/material/Autocomplete";

const useStyles = makeStyles({
  paper: {
    padding: 10,
  },
});
const AddSchedule = () => {
  const classes = useStyles();

  return (
    <div>
      <Header title="Add New Schedule" />
      <div className="content-container">
        <Paper variant="outlined" className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={doctorsArr}
                renderInput={(params) => (
                  <TextField {...params} label="Doctor / Therapist" fullWidth/>
                )}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={doctorsArr}
                renderInput={(params) => (
                  <TextField {...params} label="time available" fullWidth/>
                )}
                fullWidth={true}
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const doctorsArr = [
  { label: "Doctor A", year: 1994 },
  { label: "Doctor B", year: 1994 },
  { label: "Doctor C", year: 1994 },
  { label: "Doctor D", year: 1994 },
  { label: "Doctor E", year: 1994 },
  { label: "Doctor F", year: 1994 },
  { label: "Doctor G", year: 1994 },
  { label: "Doctor H", year: 1994 },

  
];

const doctorsArr = [
    { label: "Doctor A", year: 1994 },
    { label: "Doctor B", year: 1994 },
    { label: "Doctor C", year: 1994 },
    { label: "Doctor D", year: 1994 },
    { label: "Doctor E", year: 1994 },
    { label: "Doctor F", year: 1994 },
    { label: "Doctor G", year: 1994 },
    { label: "Doctor H", year: 1994 },
  
    
  ];
export default AddSchedule;
