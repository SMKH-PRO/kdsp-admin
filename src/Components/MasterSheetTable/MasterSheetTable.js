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

const actionButtons = () => (
    <div className="row">
        <IconButton className="myTableActions" size="small">
            <Edit className="increaseFontSizeOnHover" color="primary" size />
        </IconButton>

        <IconButton>
            <Delete className="increaseFontSizeOnHover" color="warning" />
        </IconButton>

        <IconButton>
            <Check className="increaseFontSizeOnHover" color="success" />
        </IconButton>
    </div>
)

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

const MasterSheetTable = () => {
    const dispatch = useDispatch()
    const dataSource = [
        {
            name: 'Ali',
            age: 4,
            schedule: '11/10/2021',
            therapist: 'Dr Shehzad',
            type: 'Occupational Therapy',
            date: '11/10/2021'
        }
    ]
    console.log("REDUX", useSelector(state => state?.waitListReducer?.waitList))

    const [selectedRow, setSelectedRow] = useState({})
    const [openFeedbackForm, setOpenFeedbackForm] = useState(false)
    const [openAddForm, setOpenAddForm] = useState(false)

    const setDataSource = (d) => dispatch(setWaitList(d))

    const addToWaitingList = (
        <div>
            <Tooltip arrow title="Add More Patients To Waiting List.">
                <IconButton
                    className="NoMargin NoPadding"
                    onClick={() => setOpenAddForm(true)}>
                    <AddCircle />
                </IconButton>
            </Tooltip>
        </div>
    )

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
            title: 'Age',
            dataIndex: 'age',
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
            title: 'Therapy Status',
            dataIndex: 'type',
        },
        {
            title: 'Payment',
            dataIndex: 'type',
        },
        {
            title: 'Date Updated',
            dataIndex: 'date',
            render: (text) => (<Tooltip arrow title={`${longTimeFormat(text)}`} ><span >{new Date(text).toLocaleDateString()}</span></Tooltip>)
        }
    ];

    const onSortEnd = ({ oldIndex, newIndex }) => {
        if (oldIndex !== newIndex) {
            const newData = arrayMove([].concat(dataSource), oldIndex, newIndex)?.filter(el => !!el);
            console.log('Sorted items: ', newData);
            setDataSource(newData);
        }
    };

    const DraggableContainer = props => (
        <SortableContainer
            useDragHandle
            disableAutoscroll
            helperClass="row-dragging"
            onSortEnd={onSortEnd}
            {...props}
        />
    );

    const DraggableBodyRow = ({ className, style, ...restProps }) => {
        // function findIndex base on Table rowKey props and should always be a right array index
        const index = dataSource?.findIndex?.(x => x.index === restProps['data-row-key']);
        return <SortableItem index={index} {...restProps} />;
    };

    return (
        <>
            <Table
                pagination={{ hideOnSinglePage: true, pageSize: 10 }}
                dataSource={Array.isArray(dataSource) ? dataSource : []}
                columns={columns}
                rowKey="index"
                components={{
                    body: {
                        wrapper: DraggableContainer,
                        row: DraggableBodyRow,
                    },
                }}
            />
            {openAddForm && <AddMasterSheet onClose={setOpenAddForm} dataSource={dataSource} selectedRow={selectedRow} />}
        </>
    );
}

export default MasterSheetTable