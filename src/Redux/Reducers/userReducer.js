import { ADD_USER } from "./../Types";

const initialState = {
  currentUser: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};
