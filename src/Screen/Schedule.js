import React, { useState } from "react";

import { Container, Typography, IconButton, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Header, ScheduleCard } from "./../Components";
import { doctorSchedules } from "../data";



const Schedule = () => {
    return (
        <div>
            <Header
                title="Schedules"
                rightComponent={
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                }
            />



            <div className="content-container">

                <p className="todayP">Today</p>

                <Grid container spacing={6}>

                    {doctorSchedules.map((d, i) => {
                        return <Grid item xs={4}>
                            <ScheduleCard cardData={d} />
                        </Grid>

                    })}
                </Grid>


            </div>
        </div>
    );
};

export default Schedule;