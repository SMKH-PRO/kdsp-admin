import React, { useState } from "react";

import { Container, TextField, Paper, Grid, Button } from "@mui/material";
import { Header } from "./../Components";
import { createStyles, makeStyles } from "@mui/styles";
import Autocomplete from "@mui/material/Autocomplete";

const useStyles = makeStyles({
  paper: {
    padding: 20,
  },
});
const AddSchedule = () => {
  const classes = useStyles();
  const [doctor, setDoctor] = useState(null);
  const [timeAvailable, setTimeAvailable] = useState(null);
  const [scheduleType, setScheduleType] = useState(null);
  const [client, setClient] = useState(null);
  const [note, setNote] = useState("");

  const onSubmit = () => {
    let obj = {
      doctor,
      timeAvailable,
      scheduleType,
      client,
      note,
    };

    let errorObj = {};
    console.log(obj, "obj");
    try {
      if (!obj.doctor) {
        errorObj = "doctor must be selected";
      }
      if (!obj.timeAvailable) {
        errorObj = "time available must be selected";
      }
      if (!obj.scheduleType) {
        errorObj = "schedule type must be selected";
      }
      if (!obj.client) {
        errorObj = "client must be selected";
      }
    } catch (error) {
      console.log(error, "err");
    }
  };
  return (
    <div>
      <Header title="Add New Schedule" />
      <div className="content-container">
        <Paper variant="outlined" className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={doctorsArr}
                renderInput={(params) => (
                  <TextField {...params} label="Doctor / Therapist" fullWidth />
                )}
                value={doctor}
                onChange={(event, newValue) => {
                  setDoctor(newValue);
                }}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={availabillityArr}
                renderInput={(params) => (
                  <TextField {...params} label="time available" />
                )}
                value={timeAvailable}
                onChange={(event, newValue) => {
                  setTimeAvailable(newValue);
                }}
                fullWidth={true}
              />
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={scheduleTypeArr}
                renderInput={(params) => (
                  <TextField {...params} label="schedule as" />
                )}
                fullWidth={true}
                value={scheduleType}
                onChange={(event, newValue) => {
                  setScheduleType(newValue);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={clientsArr}
                renderInput={(params) => (
                  <TextField {...params} label="Client" />
                )}
                fullWidth={true}
                value={client}
                onChange={(event, newValue) => {
                  setClient(newValue);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Note"
                multiline
                rows={4}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                variant="outlined"
                fullWidth
                placeholder="Optional..."
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={onSubmit}
              >
                Add Schedule
              </Button>
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

const clientsArr = [
  { label: "Client A", year: 1994 },
  { label: "Client B", year: 1994 },
  { label: "Client C", year: 1994 },
  { label: "Client D", year: 1994 },
  { label: "Client E", year: 1994 },
  { label: "Client F", year: 1994 },
  { label: "Client G", year: 1994 },
  { label: "Client H", year: 1994 },
];

const availabillityArr = [
  { label: "on monday 12:00 am to 13:00 pm", year: 1994 },
  { label: "on tuesday 12:00 am to 13:00 pm", year: 1994 },
  { label: "on wednesday 12:00 am to 13:00 pm", year: 1994 },
  { label: "on thursday 12:00 am to 13:00 pm", year: 1994 },
  { label: "on friday 12:00 am to 13:00 pm", year: 1994 },
  { label: "on saturday 12:00 am to 13:00 pm", year: 1994 },
  { label: "on sunday 12:00 am to 13:00 pm", year: 1994 },
];

const scheduleTypeArr = [
  { label: "one off", year: 1994 },
  { label: "daily", year: 1994 },
  { label: "weekly", year: 1994 },
  { label: "monthly", year: 1994 },
];
export default AddSchedule;
