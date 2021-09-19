import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AddWaitList = ({ onClose, selectedRow }) => {
    const [name, setName] = useState(selectedRow?.name)
    const [phone, setPhone] = useState(selectedRow?.phone)
    const [age, setAge] = useState(selectedRow.age)

    const handleClose = () => {
        if (typeof onClose == "function") onClose(false)
    };

    return (

        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>Add Patients</DialogTitle>
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
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Patient Age"
                    type="number"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Phone Number"
                    type="tel"
                    fullWidth
                    variant="outlined"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}
export default AddWaitList