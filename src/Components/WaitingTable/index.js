import React, { useState } from 'react';

import { Popconfirm, Table } from 'antd';
import { arrayMove, sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import "./index.css"
import "antd/dist/antd.css";
import { AddCircle, Delete, DragIndicator, Edit, Check } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { ConditionalTooltip, fakeLoading, isNull, longTimeFormat } from '../../Utils/helpers';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { deleteFromWaitList, setWaitList } from '../../Redux/Actions/waitListActions';
import { useDispatch } from 'react-redux';
import AddWaitList from './Add';
import FeedbackForm from './Feedback';
import { Link } from 'react-router-dom';
import { addSchedulesPath } from '../../Navigation/routes';

const DragHandle = sortableHandle(() => <DragIndicator style={{ cursor: 'grab', color: '#999' }} />);



const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

const SortableTable = () => {
    const dispatch = useDispatch()
    const dataSource = useSelector(state => (state?.waitListReducer?.waitList || []))
    console.log("REDUX", dataSource)

    const [selectedRow, setSelectedRow] = useState({})
    const [openFeedbackForm, setOpenFeedbackForm] = useState(false)
    const [openAddForm, setOpenAddForm] = useState(false)

    const setDataSource = (d) => dispatch(setWaitList(d))

    const addToWaitingList = (
        <div>
            <Tooltip arrow title="Add More Patients To Waiting List.">
                <IconButton

                    className="NoMargin NoPadding"
                    onClick={() => { setSelectedRow({}); setOpenAddForm(true) }}>
                    <AddCircle />
                </IconButton>
            </Tooltip>
        </div>
    )

    const handleDelete = (id) => {
        dispatch(deleteFromWaitList(id, dataSource))
    }
    const handleEdit = (obj) => {
        setSelectedRow(obj)
        setOpenAddForm(true)
    }
    const actionButtons = (index, record) => (
        <div className="row">
            <IconButton onClick={() => handleEdit(record)} className="myTableActions" size="small">
                <Edit className="increaseFontSizeOnHover" color="primary" size />
            </IconButton>
            <Popconfirm okText='Yes' title="Sure to delete?" onConfirm={() => handleDelete(record?.id)}>
                <IconButton >
                    <Delete className="increaseFontSizeOnHover" color="warning" />
                </IconButton>
            </Popconfirm>

            <Link to={`${addSchedulesPath}/${record?.id}`}>
                <IconButton>
                    <Check className="increaseFontSizeOnHover" color="success" />
                </IconButton>
            </Link>

        </div>
    )


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
            render: (text, record) => {
                let click = () => { setSelectedRow(record); setOpenFeedbackForm(true) }

                if (!isNull(text)) {
                    let isLargeText = Boolean(text?.length > 30)
                    return (
                        <ConditionalTooltip show={isLargeText} title={text}>
                            <span style={{ cursor: "pointer" }} onClick={click} >{isLargeText ? text?.substr(0, 30) + "..." : text}</span>
                        </ConditionalTooltip>
                    )
                }

                return <Button onClick={click} color="primary">Add Feedback  </Button>
            }
        },
        {
            title: 'Date Updated',
            dataIndex: 'date',
            render: (text) => (<Tooltip arrow title={`${longTimeFormat(text)}`} ><span >{new Date(text).toLocaleDateString()}</span></Tooltip>)
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
            setDataSource(null);

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
            {openAddForm && <AddWaitList onClose={setOpenAddForm} dataSource={dataSource} selectedRow={selectedRow} />}
            {openFeedbackForm && <FeedbackForm dataSource={dataSource} selectedRow={selectedRow} onClose={setOpenFeedbackForm} />}

        </>
    );

}

export default SortableTable