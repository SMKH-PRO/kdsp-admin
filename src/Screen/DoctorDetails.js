import React, { useState } from "react";

import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import { Header, DoctorCard } from "./../Components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import { message } from "antd";
import { ADD_DOCTOR_AVAILABILITY } from "./../Redux/Types";

import { useDispatch } from "react-redux";
const DoctorDetails = ({}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) =>
    state.doctorReducer.doctors.find((v) => v.id === id)
  );
  const doctorAvailibilty = useSelector(
    (state) => state.doctorReducer.doctorAvailibilty
  );
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = () => {
    try {
      const obj = {
        startDate,
        endDate,
        day,
        doctorId: id
      };
      console.log(obj, "opopopopop");
      dispatch({
        type: ADD_DOCTOR_AVAILABILITY,
        payload: [...doctorAvailibilty ||  [], obj],
      });
      message.success("Availability Added Successfully");
      setStartDate("");
      setEndDate("");
      setDay("");
    } catch (error) {
      message.error(error.message);
    }
  };

  console.log(doctor, 'doctor')
  return (
    <div>
      <Header title="Doctor details" />
      <div className="content-container">
        <DoctorCard data={doctor || {}} containerXs={5} />
        <Grid container spacing={1} className="mVertical-10">
          <Grid item xs={12}>
            <Typography variant="h5">Add Available times</Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ padding: 10 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ]}
                    renderInput={(params) => (
                      <TextField {...params} label="Day" fullWidth />
                    )}
                    value={day}
                    onChange={(event, newValue) => {
                      setDay(newValue);
                    }}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={4}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Start Time"
                      value={startDate}
                      onChange={(newValue) => {
                        setStartDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={4}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="End Time"
                      value={endDate}
                      onChange={(newValue) => {
                        setEndDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={onSubmit}
                  >
                    Add Time
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DoctorDetails;
