import React from 'react'
import { makeStyles } from '@mui/styles';
import SortableTable from '../Components/WaitingTable/index';
import Header from '../Components/Header/index';
import Container from '@mui/material/Container';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'red',
    },
});

const Awaiting = () => {
    return (
        <div className="content-container">
            <Header title="Waiting List" />
            <SortableTable />
        </div>
    )
}

export default Awaiting
