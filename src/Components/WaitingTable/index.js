import React, { useState } from 'react';

import { Table } from 'antd';
import { arrayMove, sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import "./index.css"
import "antd/dist/antd.css";
import { AddCircle, Delete, DragIndicator, Edit, Check } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const DragHandle = sortableHandle(() => <DragIndicator style={{ cursor: 'grab', color: '#999' }} />);
const addToWaitingList = (
    <div>
        <Tooltip title="Add More Patients To Waiting List.F">
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
        <Edit />
        <Delete />
        <Check />

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
        title: 'Name',
        dataIndex: 'name',
        className: 'drag-visible',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: "Actions",
        dataIndex: 'sort',
        width: 30,
        className: 'drag-visible',
        render: actionButtons,
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        index: 0,
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        index: 1,
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        index: 2,
    },



];

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

const SortableTable = () => {

    const [dataSource, setDataSource] = useState(data)

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