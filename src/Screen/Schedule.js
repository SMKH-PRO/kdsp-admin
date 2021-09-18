import React, { useState } from "react";

import { Container, Typography, IconButton, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Header, ScheduleCard } from "./../Components";


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



            <div className="content-container" style={{ backgroundColor: "red" }}>
                <Typography>Today</Typography>

                <Grid container spacing={6}>

                    <Grid item xs={4}>
                        <ScheduleCard />
                    </Grid>

                    <Grid item xs={4}>
                        <ScheduleCard />
                    </Grid>


                    <Grid item xs={4}>
                        <ScheduleCard />
                    </Grid>

                </Grid>

            </div>
        </div>
    );
};

export default Schedule;