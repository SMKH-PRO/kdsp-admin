import React, { useState } from 'react';
import { Table } from 'antd';
import { arrayMove, sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import "./index.css"
import "antd/dist/antd.css";
import { AddCircle, Delete, DragIndicator, Edit, Check } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { ConditionalTooltip, fakeLoading, isNull, longTimeFormat } from '../../Utils/helpers';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { setWaitList } from '../../Redux/Actions/waitListActions';
import { useDispatch } from 'react-redux';
import AddMasterSheet from './AddMasterSheet'
import { setMasterSheet } from '../../Redux/Actions/msheetAction';

const actionButtons = () => (
    <div className="row">


        <IconButton>
            <Delete className="increaseFontSizeOnHover" color="warning" />
        </IconButton>


    </div>
)



const MasterSheetTable = () => {
    const dispatch = useDispatch()



    const dataSource = useSelector(state => state?.msheetReducer?.mastersheet)

    const [selectedRow, setSelectedRow] = useState({})
    const [openAddForm, setOpenAddForm] = useState(false)

    const setDataSource = (d) => dispatch(setMasterSheet(d))

    const addToWaitingList = (
        <div>
            <Tooltip arrow title="Add Records">
                <IconButton
                    className="NoMargin NoPadding"
                    onClick={() => setOpenAddForm(true)}>
                    <AddCircle />
                </IconButton>
            </Tooltip>
        </div>
    )

    /**
     *  {
        "id": "338186de-7335-41b8-81ab-37d1c9c8807f",
        "key": "338186de-7335-41b8-81ab-37d1c9c8807f",

        "index": 0,
        "name": "Kamran",
        "schedule": { startTime: new Date().getTime(), endTime: new Date().getTime() },
        "phone": "336423234",
        "payment": "500",
        "type": "Occupational Therapy",
        "date": 1632044250440
    },
     */
    const columns = [
        {
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
            render: (text, record) => (
                <div className="row">
                    <Tooltip arrow title={`${longTimeFormat(record?.schedule?.startTime)}`} ><span >{new Date(record?.schedule?.startTime).toLocaleDateString()}</span></Tooltip>
                    &nbsp;- &nbsp;
                    <Tooltip arrow title={`${longTimeFormat(record?.schedule?.endTime)}`} ><span >{new Date(record?.schedule?.endTime).toLocaleDateString()}</span></Tooltip>
                </div>
            )
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
            render: (text) => <a>Rs. {text}</a>,

        },
        {
            title: 'Date Updated',
            dataIndex: 'date',
            render: (text) => (<Tooltip arrow title={`${longTimeFormat(text)}`} ><span >{new Date(text).toLocaleDateString()}</span></Tooltip>)
        }
    ];



    return (
        <>
            <Table
                pagination={{ hideOnSinglePage: true, pageSize: 10 }}
                dataSource={Array.isArray(dataSource) ? dataSource : []}
                columns={columns}
                rowKey="id"

            />
            {openAddForm && <AddMasterSheet onClose={setOpenAddForm} dataSource={dataSource} selectedRow={selectedRow} />}
        </>
    );
}

export default MasterSheetTable