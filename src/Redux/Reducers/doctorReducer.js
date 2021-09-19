import { ADD_DOCTOR, ADD_DOCTOR_AVAILABILITY } from "./../Types";

const initialState = {
  doctors: [
    {
      name: "abdul Haseeb",
      id: "id-1",
      location: "karachi, pakistan",
      email: "ahaseeb@yahoo.com",
      ocupation: ["Physical Therapy"],
    },
    {
      name: "Moaaz Saith",
      id: "id-2",
      location: "lahore, pakistan",
      email: "moaaz@yahoo.com",
      ocupation: ["Speech Therapy"],
    },
    {
      name: "Manssor Saith",
      id: "id-3",
      location: "quetta, pakistan",
      email: "manssor@yahoo.com",
      ocupation: ["Speech Therapy"],
    },
  ],
  doctorAvailibility: [
    {
      day: "Sunday",
      startDate: "Sun Sep 19 2021 9:00:00 GMT+0500 (Pakistan Standard Time)",
      startDate: "Sun Sep 19 2021 10:00 GMT+0500 (Pakistan Standard Time)",
      doctorId: "id-1",
    },
    {
      day: "Sunday",
      startDate: "Sun Sep 19 2021 10:00:00 GMT+0500 (Pakistan Standard Time)",
      startDate: "Sun Sep 19 2021 11:00 GMT+0500 (Pakistan Standard Time)",
      doctorId: "id-2",
    },
    {
      day: "Sunday",
      startDate: "Sun Sep 19 2021 11:00:00 GMT+0500 (Pakistan Standard Time)",
      startDate: "Sun Sep 19 2021 12:00 GMT+0500 (Pakistan Standard Time)",
      doctorId: "id-2",
    },
    {
      day: "Sunday",
      startDate: "Sun Sep 19 2021 13:00:00 GMT+0500 (Pakistan Standard Time)",
      startDate: "Sun Sep 19 2021 14:00 GMT+0500 (Pakistan Standard Time)",
      doctorId: "id-1",
    },
    {
      day: "Sunday",
      startDate: "Sun Sep 19 2021 14:00:00 GMT+0500 (Pakistan Standard Time)",
      startDate: "Sun Sep 19 2021 15:00 GMT+0500 (Pakistan Standard Time)",
      doctorId: "id-3",
    },
    {
      day: "Sunday",
      startDate: "Sun Sep 19 2021 15:00:00 GMT+0500 (Pakistan Standard Time)",
      startDate: "Sun Sep 19 2021 16:00 GMT+0500 (Pakistan Standard Time)",
      doctorId: "id-2",
    },
    {
      day: "Sunday",
      startDate: "Sun Sep 19 2021 16:00:00 GMT+0500 (Pakistan Standard Time)",
      startDate: "Sun Sep 19 2021 17:00 GMT+0500 (Pakistan Standard Time)",
      doctorId: "id-3",
    },
    {
      day: "Sunday",
      startDate: "Sun Sep 19 2021 11:00:00 GMT+0500 (Pakistan Standard Time)",
      startDate: "Sun Sep 19 2021 12:00 GMT+0500 (Pakistan Standard Time)",
      doctorId: "id-3",
    },
    {
      day: "Sunday",
      startDate: "Sun Sep 19 2021 10:00:00 GMT+0500 (Pakistan Standard Time)",
      startDate: "Sun Sep 19 2021 11:00 GMT+0500 (Pakistan Standard Time)",
      doctorId: "id-2",
    },
  ],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOCTOR:
      return { ...state, doctors: action.payload };
    case ADD_DOCTOR_AVAILABILITY:
      return { ...state, doctorAvailibility: action.payload };

    default:
      return state;
  }
};
