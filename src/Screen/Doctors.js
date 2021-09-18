import React, { useState } from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Container, Button } from "@mui/material";
import { adddoctorsPath } from '../Navigation/routes'


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main
    },
  }),
);

const Doctor = (props) => {
  console.log('props', props)
  const classes = useStyles(props);
  return (
    <div>
      <div className='flex-end button-margin'>
        <Button variant="contained" onClick={() => props?.history?.push(adddoctorsPath)}>Add Doctor</Button>
      </div>
    </div>
  );
};

export default Doctor;
