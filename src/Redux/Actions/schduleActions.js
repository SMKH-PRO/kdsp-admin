import { ADD_SCHEDULE } from "../Types";

export const addSchedule = (data) => (
    {
        type: ADD_SCHEDULE,
        payload: data
    }
)