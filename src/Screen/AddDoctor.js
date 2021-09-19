import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Paper,
  Typography,
  TextField,
  Button,
  InputLabel,
  Select,
  Box,
  Chip,
  MenuItem,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Header } from "./../Components";
import { message, } from 'antd';

import { useDispatch, useSelector } from "react-redux";
import { ADD_DOCTOR } from "../Redux/Types";
import { v4 as uuidv4 } from 'uuid';

import { OT, PT, ST } from '../Utils/constants';
const useStyles = makeStyles({
  paper: {
    padding: 20,
  },
});


const names = [
  OT,
  PT,
  ST
]
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AddDoctor = () => {
  const classes = useStyles();
  const theme = useTheme();
  const doctors = useSelector((state) => state.doctorReducer.doctors);
  const dispatch = useDispatch();
  const [ocupation, setOcupation] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const [errors, setError] = useState({});
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOcupation(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  function getStyles(name, ocupation, theme) {
    return {
      fontWeight:
        ocupation.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const onSubmit = () => {
    try {
      let errorObj = {};
      let obj = {
        ocupation,
        name,
        email,
        phoneNumber,
        location,
        id: uuidv4()
      };
      if (!obj.ocupation.length) {
        errorObj.ocupation = "ocupation is required";
      }
      if (!obj.name) {
        errorObj.name = "name is required";
      }
      if (!obj.email) {
        errorObj.email = "email is required";
      }
      if (!obj.phoneNumber) {
        errorObj.phoneNumber = "phoneNumber is required";
      }
      if (!obj.location) {
        errorObj.location = "location is required";
      }

      if (Object.keys(errorObj).length) {
        setError(errorObj);
        return;
      }

      dispatch({
        type: ADD_DOCTOR,
        payload: [...doctors, obj],
      });

      setOcupation([])
      setEmail('')
      setPhoneNumber('')
      setLocation('')
      setName('')
      message.success("Doctor added successfully");
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div>
      <Header title="Add Doctor" />
      <div className="content-container">
        <Paper className={classes.paper}>
          <TextField
            fullWidth
            id="outlined-required"
            label="Name"
            margin="dense"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            fullWidth
            id="outlined-required"
            label="Email"
            margin="dense"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            id="outlined-required"
            label="Phone Number"
            margin="dense"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber}
          />
          <TextField
            fullWidth
            id="outlined-required"
            label="Institude / Location"
            margin="dense"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            error={Boolean(errors.location)}
            helperText={errors.location}
          />
          <FormControl style={{ width: "100%" }} margin="dense">
            <InputLabel id="therapy">Therapy</InputLabel>
            <Select
              labelId="therapy"
              id="therapy-options"
              multiple
              value={ocupation}
              onChange={handleChange}
              input={
                <OutlinedInput
                  id="select-multiple-chip"
                  label="Chip"
                  error={Boolean(errors.ocupation)}
                  helperText={errors.ocupation}
                />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, ocupation, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            // className="submit-button"
            onClick={onSubmit}
            size="large"
            style={{marginTop: 7}}
          >
            Submit
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default AddDoctor;
