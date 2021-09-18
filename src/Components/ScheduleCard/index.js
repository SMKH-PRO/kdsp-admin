import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import DoctorApIcon from "../../Assets/Icons/doctor_appointment.png";
import { doctorSchedules } from "../../data";
import { useTheme } from '@mui/material/styles';
import "./index.css";


let cancelled = "Cancelled";
let completed = "Completed";


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


const ScheduleCard = ({ cardData }) => {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className="sCardMainDiv">



            <div className="sCardLeftDiv">

                <div className={classes.cardLeftLine}>

                </div>

                <img src={DoctorApIcon} style={{ width: "85%", height: "85%" }} />

            </div>

            <div className="sCardRightDiv">


                <p style={{ margin: "0px", fontWeight: "bold" }}>{cardData?.doctorName}</p>

                <p style={{ margin: "0px", color: 'grey' }}>{`Session of ${cardData?.sessionType} is set with ${cardData?.clientName}`}</p>


                <div className="cardStatusDiv">

                    <p className={classes?.timeText}>12:00 - 13:00</p>

                    <div style={{ display: "flex", alignItems: "center" }}>

                        <p className={classes?.timeText} style={{ display: "flex", alignItems: "center", margin: "0px" }}>Status:
                            <p style={{ fontWeight: "bold", margin: "0px", color: cardData?.status == cancelled ? "red" : cardData?.status == completed ? "green" : theme?.palette?.primary?.main }}> {cardData?.status}</p>
                        </p>
                    </div>


                </div>


            </div>

        </div>
    );
};

export default ScheduleCard;
