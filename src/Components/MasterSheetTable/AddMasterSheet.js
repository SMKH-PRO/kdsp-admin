import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { PT, OT, ST } from '../../Utils/constants';
import { CircularProgress, InputAdornment } from '@mui/material';
import { addWaitListObj, updateWaitListObj } from '../../Redux/Actions/waitListActions';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ConditionalTooltip } from '../../Utils/helpers';

const AddMasterSheet = ({ onClose, dataSource }) => {
    const dispatch = useDispatch()
    const waitList = useSelector(state => state?.waitListReducer?.waitList) || []
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [countryCode, setCountryCode] = useState("+92")
    const [age, setAge] = useState("")
    const [type, setType] = useState("")
    const [loading, setLoading] = useState(false)
    const handleClose = () => {
        if (typeof onClose == "function") onClose(false)
    };



    const submit = () => {
        let object = {
            id: uuidv4(),
            index: dataSource?.length - 1,
            name, age, phone, type,
            date: new Date().getTime()
        }
        dispatch(addWaitListObj(object, dataSource))

        handleClose()
    }



    const loadingComp = loading && <span style={{ marginRight: 15 }}> <CircularProgress size={16} /></span>

    return (

        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>Add Client</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Client Name.
                </DialogContentText>

                <Select
                    fullWidth
                    placeholder="Client Name"
                    value={type}
                    label="Therapy"
                    onChange={e => setType(e.target.value)}
                >
                    {waitList?.map((v, i) => <MenuItem value={v?.name} key={i}>{v?.name}</MenuItem>)}
                </Select>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Patient Name"
                    type="text"
                    fullWidth
                    value={name}
                    onChange={e => setName(e.target.value)}

                    variant="outlined"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Phone Number"
                    value={phone}
                    onChange={e => setPhone(e.target.value?.replace?.(/[^0-9]/g, ''))}
                    type="tel"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">{countryCode}</InputAdornment>,
                    }}
                    fullWidth
                    variant="outlined"
                />
                <br />
                <Select
                    fullWidth
                    placeholder="Therapy Type"
                    value={type}
                    label="Therapy"
                    onChange={e => setType(e.target.value)}
                >
                    <MenuItem value={OT}>{OT}</MenuItem>
                    <MenuItem value={PT}>{PT}</MenuItem>
                    <MenuItem value={ST}>{ST}</MenuItem>
                </Select>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}
export default AddMasterSheet