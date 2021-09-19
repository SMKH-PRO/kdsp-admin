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
  doctorAvailibility: [],
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
