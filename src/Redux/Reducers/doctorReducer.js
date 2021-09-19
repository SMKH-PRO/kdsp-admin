import { ADD_DOCTOR, ADD_DOCTOR_AVAILABILITY } from "./../Types";

const initialState = {
  doctors: [],
  doctorAvaility: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOCTOR:
      return { ...state, doctors: action.payload };
      case ADD_DOCTOR_AVAILABILITY:
        return { ...state, doctorAvaility: action.payload };
  
    default:
      return state;
  }
};
