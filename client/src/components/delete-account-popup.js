
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';



function DeleteAccount({setUser}){

const user = useContext(UserContext)

let navigate = useNavigate()

const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    fetch(`/trainers/${user.id}`,{
        method: "DELETE"
      })
      .then(() => {
        fetch('/logout',{
            method: "DELETE"
          })
          .then(() => {
            setOpen(false)
            navigate('/')
            setUser()
          })

      })
      
  }


    return(
        <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Delete Account
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete your account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action is not reversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleDelete}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}

export default DeleteAccount