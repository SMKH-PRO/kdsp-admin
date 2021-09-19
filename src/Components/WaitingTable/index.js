import React, { useState } from 'react';

import { Table } from 'antd';
import { arrayMove, sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import "./index.css"
import "antd/dist/antd.css";
import { AddCircle, Delete, DragIndicator, Edit, Check } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { isNull, longTimeFormat } from '../../Utils/helpers';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { setWaitList } from '../../Redux/Actions/waitListActions';
import { useDispatch } from 'react-redux';


const DragHandle = sortableHandle(() => <DragIndicator style={{ cursor: 'grab', color: '#999' }} />);
const addToWaitingList = (
    <div>
        <Tooltip arrow title="Add More Patients To Waiting List.">
            <IconButton
                className="NoMargin NoPadding"
                onClick={() => alert("Coming Soon!")}>
                <AddCircle />
            </IconButton>
        </Tooltip>
    </div>
)

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

const SortableTable = () => {
    const dispatch = useDispatch()
    const dataSource = useSelector(state => (state?.waitListReducer?.waitList || []))
    console.log("REDUX", dataSource)



    const setDataSource = (d) => dispatch(setWaitList(d))
    
    const columns = [
        {
            title: addToWaitingList,
            dataIndex: 'sort',
            width: 30,
            className: 'drag-visible',
            render: () => <DragHandle />,

        },

        {
            title: 'Patient Name',
            dataIndex: 'name',
            className: 'drag-visible',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            render: (text) => <a href={`tel:${text}`}>{text}</a>,

        },
        {
            title: 'Therapy Type',
            dataIndex: 'type',
        },
        {
            title: 'Patient Feedback',
            dataIndex: 'feedback',
            render: (text, record) => (

                !isNull(text) ?
                    (<span >{text}</span>)
                    :
                    (<Button color="primary">Add Feedback  </Button>)
            )
        },
        {
            title: 'Date Updated',
            dataIndex: 'date',
            render: (text) => (<Tooltip arrow title={`${longTimeFormat(new Date().getTime())}`} ><span >{text}</span></Tooltip>)
        },
        {
            title: "Actions",
            dataIndex: 'actions',
            width: 30,
            className: 'drag-visible',
            render: actionButtons,
        },
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
        const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
        return <SortableItem index={index} {...restProps} />;
    };


    return (
        <Table
            pagination={{ hideOnSinglePage: true, pageSize: 10 }}
            dataSource={dataSource}
            columns={columns}
            rowKey="index"
            components={{
                body: {
                    wrapper: DraggableContainer,
                    row: DraggableBodyRow,
                },
            }}
        />
    );

}

export default SortableTable