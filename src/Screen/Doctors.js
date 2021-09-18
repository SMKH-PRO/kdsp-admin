import React, { useState } from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Container, Button } from "@mui/material";


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main
    },
  }),
);

const Doctor = (props) => {
  const classes = useStyles(props);
  return (
    <div>
      <div>
        <Button variant="contained">Add Doctor</Button>
      </div>
    </div>
  );
};

export default Doctor;
