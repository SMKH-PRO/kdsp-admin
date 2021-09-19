import React from 'react'
import MasterSheetTable from '../Components/MasterSheetTable/MasterSheetTable';
import Header from '../Components/Header/index';

const MasterSheet = () => {
    return (
        <div className="content-container">
            <Header title="Master Sheet" />

            <MasterSheetTable />
        </div>
    )
}

export default MasterSheet
