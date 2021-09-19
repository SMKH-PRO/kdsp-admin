import { ADD_TO_WAIT_LIST, DELET_FROM_WAIT_LIST, SET_WAIT_LIST } from "../Types";
const initialWaitlist = [
  {
    id: "random1",
    key: '1',
    name: 'John Brown',
    age: 32,
    phone: '+92 3484644919',
    index: 0,
    type: "Physical Therapy",
    date: new Date().getTime()

  },

]
const initialState = {
  waitList: initialWaitlist,
};
export default (state = initialState, action) => {

  const prevWaitList = state?.waitList || []

  switch (action.type) {
    case ADD_TO_WAIT_LIST:
      return { ...state, waitList: [...prevWaitList, action.waitListOBJ] };
    case DELET_FROM_WAIT_LIST:
      let updatedWaitList = prevWaitList?.filter((d) => d?.id !== action.waitListId)
      return { ...state, waitList: (updatedWaitList || []) };
    case SET_WAIT_LIST:
      return { ...state, waitList: action.waitList };
  

    default:
      return state;
  }
};
