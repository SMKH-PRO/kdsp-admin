import { ADD_TO_WAIT_LIST, DELET_FROM_WAIT_LIST, SET_WAIT_LIST, UPDATE_WAIT_LIST } from "../Types";


export const addToWaitList = (obj) => (
    {
        type: ADD_TO_WAIT_LIST,
        waitListOBJ: obj
    }
)

export const deleteFromWaitList = (id) => (
    {
        type: DELET_FROM_WAIT_LIST,
        waitListId: id
    }
)

export const setWaitList = (waitListArray) => (
    {
        type: SET_WAIT_LIST,
        waitList: waitListArray
    }
)


export const updateWaitListObj = (newWaitListObj, waitListState) => {
    const waitListId = newWaitListObj?.id

    const prevWaitListObj = waitListState?.find(d => d?.id == waitListId)
    const updatedWaitListObj = Object.assign(prevWaitListObj, newWaitListObj)
    const allExceptThis = waitListState.filter(d => d?.id !== waitListId)
    const newWaitList = [...allExceptThis, updatedWaitListObj]
    console.log("newWaitList", newWaitList)
    return setWaitList(newWaitList)
}