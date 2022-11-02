
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';


function UpdateStatus({workout}){
    const [open, setOpen] = useState(false);
    let navigate = useNavigate()

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleComplete = () => {
      fetch(`/workouts/${workout.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            status: "complete"
        })
      })
      .then(r => r.json())
      .then(resp => {
        console.log(resp)
        setOpen(false);
      })
      window.location.reload()
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Complete Workout
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Mark workout as complete?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Great job! Press 'Complete' to complete this workout.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Close</Button>
            <Button onClick={handleComplete}>
              Complete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

export default UpdateStatus