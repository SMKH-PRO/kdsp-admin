import React, { useEffect, useState } from "react";

import { Container, TextField, Paper, Grid, Button, CircularProgress } from "@mui/material";
import { Header } from "./../Components";
import { createStyles, makeStyles } from "@mui/styles"
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_SCHEDULE } from "../Redux/Types";
import { OT, PT, ST } from '../Utils/constants';
import { addSchedule } from "../Redux/Actions/schduleActions";
import { v4 as uuidv4 } from 'uuid';
import { fakeLoading } from "../Utils/helpers";
import { useParams } from "react-router-dom";
import { schedulesPath } from "../Navigation/routes";

let therapyListArr = [
  OT,
  PT,
  ST
];

const useStyles = makeStyles({
  paper: {
    padding: 20,
  },
});

const AddSchedule = (props) => {
  const { id } = useParams();

  console.log("id=======>", id)

  const classes = useStyles();
  const dispatch = useDispatch();

  const schedulesArr = useSelector((store) => store?.ScheduleReducer?.schedules);
  const dataSource = useSelector(state => (state?.waitListReducer?.waitList || []))

  const [doctor, setDoctor] = useState(null);
  const [timeAvailable, setTimeAvailable] = useState(null);
  const [scheduleType, setScheduleType] = useState(null);
  const [client, setClient] = useState(null);
  const [note, setNote] = useState("");
  const [therapyType, setTherapyType] = useState("");
  const [loading, setLoading] = useState(false);
  const [onlyClient, setonlyClient] = useState('');
  const [clientsArr, setclientsArr] = useState([]);

  const [errors, setErrors] = useState({});


  useEffect(() => {
    if (id) {

      let clientObj = dataSource.find((d) => d?.id == id);

      let newObj = {
        label: clientObj?.name,
        id: clientObj?.id
      }

      setonlyClient(newObj)
    } else {
      setonlyClient('')
      let clientsArrrr = dataSource.map((d) => ({
        label: d?.name,
        id: d?.id
      }));
      console.log("clientsArrrr-->", clientsArrrr)
      setclientsArr([...clientsArrrr])
    }
  }, [])

  const onSubmit = async () => {
    let obj = {
      doctor,
      timeAvailable,
      scheduleType,
      client,
      note,
    };

    let errorObj = {};

    try {
      if (!obj.doctor) {
        errorObj.doctor = "doctor must be selected";
      }
      if (!obj.timeAvailable) {
        errorObj.timeAvailable = "time available must be selected";
      }
      if (!obj.scheduleType) {
        errorObj.scheduleType = "schedule type must be selected";
      }
      if (!obj.client && !onlyClient) {
        errorObj.client = "client must be selected";
      }

      if (Object.keys(errorObj).length) {
        setErrors(errorObj);
        return;
      } else {



        setLoading(true)

        await fakeLoading()

        let scheduleObj = {
          doctorName: doctor,
          clientName: client?.label || onlyClient?.label,
          clientId: client?.id || onlyClient?.id,
          status: "Scheduled",
          startTime: "8945982",
          endTime: "jndjfnj",
          sessionType: therapyType,
          id: uuidv4()
        }


        console.log("schedulesArr===>", schedulesArr)

        let newArr = [...schedulesArr, scheduleObj];

        dispatch(addSchedule(newArr))

        props.history.push(schedulesPath)

        setLoading(false);

      }

    } catch (error) {
      console.log(error, "err");
    }
  };

  const loadingComp = loading && <span style={{ marginRight: 15 }}> <CircularProgress size={16} /></span>

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
                  <TextField
                    {...params}
                    label="Doctor / Therapist"
                    fullWidth
                    error={Boolean(errors.doctor)}
                    helperText={errors.doctor}
                  />
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
                  <TextField
                    {...params}
                    label="Time available"
                    error={Boolean(errors.timeAvailable)}
                    helperText={errors.timeAvailable}
                  />
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
                  <TextField
                    {...params}
                    label="Schedule as"
                    error={Boolean(errors.scheduleType)}
                    helperText={errors.scheduleType}
                  />
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
                disabled={onlyClient ? true : false}
                options={onlyClient || clientsArr}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Client"
                    error={onlyClient ? false : Boolean(errors.client)}
                    helperText={onlyClient ? false : errors.client}
                  />
                )}
                fullWidth={true}
                value={onlyClient || client}
                onChange={(event, newValue) => {
                  setClient(newValue);
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={therapyListArr}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Therapy Type"
                    error={Boolean(errors.therapyType)}
                    helperText={errors.therapyType}
                  />
                )}
                fullWidth={true}
                value={therapyType}
                onChange={(event, newValue) => {
                  setTherapyType(newValue);
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
                {loadingComp}{loading ? "Adding..." : "Add Schedule"}

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

// const clientsArr = [
//   { label: "Client A", year: 1994 },
//   { label: "Client B", year: 1994 },
//   { label: "Client C", year: 1994 },
//   { label: "Client D", year: 1994 },
//   { label: "Client E", year: 1994 },
//   { label: "Client F", year: 1994 },
//   { label: "Client G", year: 1994 },
//   { label: "Client H", year: 1994 },
// ];

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
