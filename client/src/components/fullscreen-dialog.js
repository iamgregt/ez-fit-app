import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box, Table, TableCell, TableHead, TextField, TableRow, TableBody, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { NavItem } from './nav-item';
import { useContext } from 'react';
import { UserContext } from '../App';
import UpdateStatus from './updated-status';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog({workout, setWorkouts, workouts}) {
  const [open, setOpen] = useState(false);
  const [newComment, setNewComment] = useState("")
  const targetWorkout = workout

  const [target, setTarget] = useState(targetWorkout)
  const [commentCount, setCommentCount] = useState(workout.comments.length)
  const [status, setStatus] = useState(workout.status)


  const user = useContext(UserContext)

  function changeCommentCount(){
    setCommentCount((current) => (current + 1))
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClose = (e) => {
    setOpen(false);
    console.log(e)
    console.log(newComment)
    console.log(status)

    const updatedWorkout = {
        body: newComment ? newComment.target.value : "",
        workout_id: workout.id,
        trainer_id: user.id,
    }



    if(updatedWorkout.body !== "" ){
        handleUpdatedWorkout(updatedWorkout)
    }else{
        console.log('no changes')
    }
  };


  function handleUpdatedWorkout(w){
    fetch('/comments', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(w)
    })
    .then(r => r.json())
    .then(resp => {
      setTarget(resp)
      console.log(resp)
      changeCommentCount()
      // window.location.reload()
    })
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClickClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {`Workout #${workout.id}`}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              SAVE
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Client"secondary={workout.client.name}  />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Workout Type"
              secondary={workout.name}
            />
          </ListItem>
          <TextField
          id="outlined-multiline-static"
          label="Notes"
          multiline
          rows={4}
          placeholder="Enter Notes Here..."
          style={{width: '50%'}}
          onChange={setNewComment}
        />
        </List>
        <UpdateStatus workout={workout} />
     <Box sx={{paddingTop: '14px'}}>
     <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Comments - {workout.comments ? workout.comments.length : null}
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {workout.comments ? workout.comments.map((c) => {
                  return(
                    <TableRow key={c.id}>
                    <TableCell>
                      {`User posted ${c.body}`}
                    </TableCell>
                  </TableRow>
                  )
                }): null}
            </TableBody>
        </Table>
     </Box>
      </Dialog>
    </div>
  );
}

export default FullScreenDialog