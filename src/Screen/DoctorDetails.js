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
import { v4 as uuidv4 } from "uuid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch } from "react-redux";
import moment from "moment";
const DoctorDetails = ({}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) =>
    state.doctorReducer.doctors.find((v) => v.id === id)
  );
  const doctorAvailibility = useSelector(
    (state) => state.doctorReducer.doctorAvailibility
  );
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [day, setDay] = useState("");

  const currentDoctorAvailibilty = doctorAvailibility?.filter(
    (v) => v?.doctorId === id
  );
  const onSubmit = () => {
    try {
      const obj = {
        startDate,
        endDate,
        day,
        doctorId: id,
        id: uuidv4(),
      };
      console.log(obj, "opopopopop");
      dispatch({
        type: ADD_DOCTOR_AVAILABILITY,
        payload: [...(doctorAvailibility || []), obj],
      });
      message.success("Availability Added Successfully");
      setStartDate("");
      setEndDate("");
      setDay("");
    } catch (error) {
      message.error(error.message);
    }
  };

  console.log(doctor, "doctor");
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
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <TableContainer component={Paper} style={{margin: 10}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                    
                      <TableCell align="center">Day</TableCell>
                      <TableCell align="center">Start</TableCell>
                      <TableCell align="center">End</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentDoctorAvailibilty.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">{row.day}</TableCell>
                        <TableCell align="center">{moment(row.startDate).format('hh:mm a')}</TableCell>
                        <TableCell align="center">{moment(row.endDate).format('hh:mm a')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DoctorDetails;
