import { SET_MASTERSHEET } from "../Types";

/**
 * {
title: addToWaitingList,
dataIndex: 'sort',
width: 30,
className: 'drag-visible',
render: () => <>&nbsp;</>,
},
{
title: 'Client Name',
dataIndex: 'name',
className: 'drag-visible',
},

{
title: 'Schedule',
dataIndex: 'schedule',
render: (text) => <a>{text}</a>,
},
{
title: 'Therapist',
dataIndex: 'therapist'
},
{
title: 'Therapy Type',
dataIndex: 'type',
},
{
title: 'Payment',
dataIndex: 'payment',
},
{
title: 'Date Updated',
 */
const initialMastersheet = [

    {
        "id": "338186de-7335-41b8-81ab-37d1c9c8807f",
        "key": "338186de-7335-41b8-81ab-37d1c9c8807f",

        "index": 0,
        "name": "Kamran",
        "schedule": { startTime: new Date().getTime(), endTime: new Date().getTime() },
        "phone": "336423234",
        "payment": "500",
        "type": "Occupational Therapy",
        "therapist": "Dr. Noman Arshad",
        "date": 1632044250440
    },
    {
        "id": "338186de-7335-41b8-81ab-37d1c9c8807f",
        "key": "338186de-7335-41b8-81ab-37d1c9c8807f",

        "index": 0,
        "name": "Umar Akmal",
        "schedule": { startTime: new Date().getTime(), endTime: new Date().getTime() },
        "phone": "336423234",
        "payment": "500",
        "type": "Occupational Therapy",
        "therapist": "Dr. Meenal Shah",
        "date": 1632044250440
    },
    {
        "id": "338186de-7335-41b8-81ab-37d1c9c8807f",
        "key": "338186de-7335-41b8-81ab-37d1c9c8807f",

        "index": 0,
        "name": "Noman Malik",
        "schedule": { startTime: new Date().getTime(), endTime: new Date().getTime() },
        "phone": "336423234",
        "payment": "500",
        "type": "Occupational Therapy",
        "therapist": "Dr. Ali Ahmed",
        "date": 1632044250440
    },

]
const initialState = {
    mastersheet: initialMastersheet,
};
export default (state = initialState, action) => {


    switch (action.type) {

        case SET_MASTERSHEET:
            return { ...state, waitList: action.mastersheet };


        default:
            return state;
    }
};
