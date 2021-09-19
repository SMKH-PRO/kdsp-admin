import { SET_WAIT_LIST } from "../Types";




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
    // console.log("newWaitList", newWaitList)
    return setWaitList(newWaitList)
}


export const addWaitListObj = (newWaitListObj, waitListState) => {

    const newWaitList = [...(waitListState || []), newWaitListObj]
    // console.log("newWaitList", newWaitList)
    return setWaitList(newWaitList)
}

export const deleteFromWaitList = (waitListId, waitListState) => {
    let allExceptThis = waitListState.filter(d => d?.id !== waitListId)
    return setWaitList(allExceptThis)

}