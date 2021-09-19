import React from 'react'
import MasterSheetTable from '../Components/MasterSheetTable/MasterSheetTable';
import Header from '../Components/Header/index';

const MasterSheet = () => {
    return (
        <div className="content-container">
            <Header />
            <h1>Master Sheet</h1>
            <MasterSheetTable />
        </div>
    )
}

export default MasterSheet
