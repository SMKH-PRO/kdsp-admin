import React, { useState } from "react";

import { Container, Typography, IconButton, Grid, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Header, ScheduleCard } from "./../Components";
import { doctorSchedules } from "../data";
import AddIcon from "@mui/icons-material/Add";
import { addSchedulesPath } from "../Navigation/routes";
import { useSelector } from "react-redux";

const Schedule = (props) => {

    const schedules = useSelector((store) => store?.ScheduleReducer?.schedules)
    console.log("schedules==>", schedules)

    return (
        <div>
            <Header
                title="Schedules"
                rightComponent={
                    <div>
                        <Button
                            startIcon={<AddIcon />}
                            onClick={() => props?.history?.push(addSchedulesPath)}
                        >
                            Add Schedule
                        </Button>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </div>
                }
            />

            <div className="content-container">

                <p className="todayP">Today</p>

                <Grid container spacing={6}>

                    {Array.isArray(schedules) && schedules.legnth ? schedules.map((d, i) => {
                        return <Grid item xs={12} sm={12} md={6} lg={4} xl={4} >
                            <ScheduleCard cardData={d} />
                        </Grid>

                    }) : <p style={{ margin: "60px" }}>No schedules for today</p>}
                </Grid>


            </div>
        </div>
    );
};

export default Schedule;