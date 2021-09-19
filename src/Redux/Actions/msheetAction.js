import { arrayMove } from "react-sortable-hoc";
import { SET_MASTERSHEET } from "../Types";




export const setMasterSheet = (waitListArray) => (
    {
        type: SET_MASTERSHEET,
        mastersheet: waitListArray
    }
)


export const updateWaitListObj = (newWaitListObj, waitListState) => {
    const waitListId = newWaitListObj?.id
    const originalIndex = newWaitListObj?.index

    const prevWaitListObj = waitListState?.find(d => d?.id == waitListId)
    const updatedWaitListObj = Object.assign(prevWaitListObj, newWaitListObj)
    const allExceptThis = waitListState.filter(d => d?.id !== waitListId)
    const newWaitList = [...allExceptThis, updatedWaitListObj]


    // console.log("newWaitList", newWaitList)

    return setMasterSheet(newWaitList)
}


export const addWaitListObj = (newWaitListObj, waitListState) => {

    const newWaitList = [...(waitListState || []), newWaitListObj]
    // console.log("newWaitList", newWaitList)
    return setMasterSheet(newWaitList)
}

export const deleteFromWaitList = (waitListId, waitListState) => {
    let allExceptThis = waitListState.filter(d => d?.id !== waitListId)
    return setMasterSheet(allExceptThis)

}