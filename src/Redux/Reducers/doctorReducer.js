import { ADD_DOCTOR } from "./../Types";

const initialState = {
  doctors: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOCTOR:
      return { ...state, doctors: action.payload };

    default:
      return state;
  }
};
