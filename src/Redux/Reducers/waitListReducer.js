import { SET_WAIT_LIST } from "../Types";
const initialWaitlist = [


]
const initialState = {
  waitList: initialWaitlist,
};
export default (state = initialState, action) => {

  const prevWaitList = state?.waitList || []

  switch (action.type) {

    case SET_WAIT_LIST:
      return { ...state, waitList: action.waitList };


    default:
      return state;
  }
};
