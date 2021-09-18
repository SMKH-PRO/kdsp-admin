import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import DoctorApIcon from "../../Assets/Icons/doctor_appointment.png";
import "./index.css"

const useStyles = makeStyles((theme) => ({
    cardLeftLine: {

        height: "90%",
        width: "4px",
        borderRadius: "100px",
        marginLeft: "7px",
        backgroundColor: theme?.palette?.primary?.main
    },
    timeText: {

        color: theme?.palette?.primary?.main,
        margin: "0px",
        fontWeight: "bold",
        marginTop: "2px"
    }
}));


const ScheduleCard = () => {


    const classes = useStyles();

    return (
        <div className="sCardMainDiv">



            <div className="sCardLeftDiv">

                <div className={classes.cardLeftLine}>

                </div>

                <img src={DoctorApIcon} style={{ width: "85%", height: "85%" }} />

            </div>

            <div className="sCardRightDiv">


                <p style={{ margin: "0px", fontWeight: "bold" }}>Dr John Doe</p>

                <p style={{ margin: "0px", color: 'grey' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <p className={classes?.timeText}>12:00 - 13:00</p>


            </div>

        </div>
    );
};

export default ScheduleCard;
