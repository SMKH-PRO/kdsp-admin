import React, { useState } from 'react';
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
import { InputAdornment } from '@mui/material';
import { updateWaitListObj } from '../../Redux/Actions/waitListActions';

/**
 * 
 *  {
    id: "random1",
    key: '1',
    name: 'John Brown',
    age: 32,
    phone: '+92 3484644919',
    index: 0,
    type: "Physical Therapy",
    date: new Date().getTime()

  },
 */
const AddWaitList = ({ onClose, selectedRow }) => {
    const isEdit = Boolean(selectedRow?.id)
    const [name, setName] = useState(selectedRow?.name || "")
    const [phone, setPhone] = useState(selectedRow?.phone || "")
    const [countryCode, setCountryCode] = useState("+92")
    const [age, setAge] = useState(selectedRow?.age || "")
    const [type, setType] = useState(selectedRow?.type || "")
    const handleClose = () => {
        if (typeof onClose == "function") onClose(false)
    };





    return (

        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>Add Patients</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Add patients to wait list.
                </DialogContentText>


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
                    label="Patient Age"
                    type="number"
                    value={age}
                    fullWidth
                    onChange={e => setAge(e.target.value)}

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
                <Button onClick={handleClose}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}
export default AddWaitList