import { ADD_SCHEDULE } from "./../Types";

const initialState = {
  schedules: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCHEDULE:
      return { ...state, schedules: [...state.schedules, action.payload] };
    default:
      return state;
  }
};