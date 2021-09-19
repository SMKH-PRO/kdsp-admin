import { ADD_CLIENT } from "../Types";
const initialClients = [
  {
    id: "338186de-7335-41b8-81ab-37d1c9c8807f",
    index: 0,
    name: "Kamran",
    age: "12",
    phone: "336423234",
    type: "Occupational Therapy",
    date: 1632044250440,
    status: "enrolled",
  },
  {
    id: "67c71366-19f2-4917-941d-a637c36eecd7",
    index: 1,
    name: "Umar Akmal",
    age: "14",
    phone: "323239034434",
    type: "Physical Therapy",
    date: 1632044220640,
    status: "enrolled",
  },
  {
    id: "aec1cf02-0d9d-4d30-9fcf-9e930452358d",
    index: 2,
    name: "Noman Malik ",
    age: "14",
    phone: "99213123",
    type: "Speech Therapy",
    date: 1632044210617,
    status: "completed",
  },
];
const initialState = {
  clients: initialClients,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return { ...state, clients: action.clients };

    default:
      return state;
  }
};
