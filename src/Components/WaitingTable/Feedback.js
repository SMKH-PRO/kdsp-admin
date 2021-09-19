import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress, TextareaAutosize } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateWaitListObj } from '../../Redux/Actions/waitListActions';
import { ConditionalTooltip, fakeLoading } from '../../Utils/helpers';

const FeedbackForm = ({ onClose, selectedRow, dataSource }) => {
    const dispatch = useDispatch()

    const [feedback, setFeedback] = useState(selectedRow?.feedback || "")
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const handleClose = () => {
        if (typeof onClose == "function") onClose(false)
    };

    const submit = async () => {
        setError('')
        if (feedback?.length < 1) {
            return setError("To submit, Please write feedback ")
        }
        setLoading(true)

        await fakeLoading()
        const newWaitListObj = { feedback, id: selectedRow?.id }


        dispatch(updateWaitListObj(newWaitListObj, dataSource))
        setLoading(false)
        handleClose()




    }

    const loadingComp = loading && <span style={{ marginRight: 15 }}> <CircularProgress size={16} /></span>

    const disabledfeedbackbutton = feedback.length < 1 || feedback == selectedRow?.feedback
    return (

        <Dialog fullWidth maxWidth="lg" open={true} onClose={handleClose}>
            <DialogTitle>{selectedRow?.feedback ? "Edit" : "Add"} Feedback</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {selectedRow?.feedback ? "Edit" : "Add"} {selectedRow?.name}'s feedback.
                </DialogContentText>
                <div style={{ marginTop: 10 }}>
                    <TextareaAutosize


                        minRows={3}
                        placeholder="Write feedback..."
                        onChange={(e) => setFeedback(e.target.value)}
                        value={feedback}
                        style={{ width: "100%", padding: 10 }}

                    />
                </div>
                {Boolean(error) && <p>{error}</p>}
            </DialogContent>
            <DialogActions>
                <Button disabled={loading} onClick={handleClose}>Cancel</Button>

                <ConditionalTooltip show={disabledfeedbackbutton} title={"To submit, Please write something new in the feedback!"}>
                    <Button disabled={disabledfeedbackbutton} onClick={submit}>{loadingComp}{loading ? "Submiting..." : "Submit"}</Button>
                </ConditionalTooltip>
            </DialogActions>
        </Dialog>
    );
}
export default FeedbackForm