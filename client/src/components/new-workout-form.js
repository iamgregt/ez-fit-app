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
import {Box, Table, TableCell, TableHead, TextField, TableRow, TableBody, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { useState } from 'react';
import { NavItem } from './nav-item';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers'
import {dayjs} from '@date-io/dayjs'
import { DateTimePicker } from '@mui/x-date-pickers';
import { UserContext } from '../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const months = [ "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December" ]


function NewWorkoutForm({clients, setWorkouts}){

    const [open, setOpen] = useState(false);
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [client, setClient] = useState('')
    const [type, setType] = useState(false)
    const [comment, setComment] = useState('')
    const user = React.useContext(UserContext)



    const handleClientChange= (event) => {
        setClient(event.target.value);
      };


    const handleTypeChange= (event) => {
        setType(event.target.value)
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
        console.log(client)
        console.log(type)
        console.log(comment)
        console.log(start)
        
        const month = start.$M
        
    
        const workoutData = {
            trainer_id: user.id,
            virtual: type,
            client_id: client,
            status: "Pending",
            day: start.$D,
            hour: start.$H,
            minute: start.$m,
            month: start.$M,
            year: start.$y

        }

        

        fetch('/workouts', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(workoutData)
        })
        .then( r => r.json())
        .then( data => {
          console.log(data)
          const newComment = {
            body: comment ? comment.target.value : null,
            workout_id: data.id,
            trainer_id: data.trainer_id
            
          }
          fetch('/comments', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
          })
          .then(r => r.json())
          .then(finishedData => {
            console.log(finishedData)
          })
          window.location.reload()
        })
        
        
        
      };


    return (
        <div style={{paddingLeft: '20px', paddingBottom: '10px'}}>
          <Button variant="outlined" onClick={handleClickOpen}>
            New Workout
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
                  {`Placeholder Text`}
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  SAVE
                </Button>
              </Toolbar>
            </AppBar>
            <List>
           
              <ListItem button style={{display: 'inline'}}>
                <ListItemText  primary="Client"  />
                <Box sx={{padding: '10px'}}>
                <FormControl sx={{width:'30ch', padding: '5px'}}>
                <InputLabel id="demo-simple-select-label">Client</InputLabel>
                <Select
                    value={client}
                    label="Client"
                    onChange={handleClientChange}
                >
                    {clients && clients.map((c) => {
                        return(
                            <MenuItem key={c.id} value={c.id}>
                                {c.name}
                            </MenuItem>
                        )
                    })}
                </Select>
                </FormControl>
                </Box>
              </ListItem>
              <Divider />
              <FormControl sx={{ width: '15ch',  paddingLeft: '5px', paddingRight: '5px'}}>
              <InputLabel>Type</InputLabel>
              <Select
              value={type}
              label="Type"
              onChange={handleTypeChange}>
                    <MenuItem value={true}>
                    Virtual
                    </MenuItem>
                    <MenuItem value={false}>
                    In-Person
                    </MenuItem>
                </Select>
              </FormControl>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Start"
                    value={start}
                    onChange={(newValue) => {
                    setStart(newValue);
                    }}
                />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="End"
                    value={end}
                    onChange={(newValue) => {
                    setEnd(newValue);
                    }}
                />
                </LocalizationProvider>
            </List>
            <TextField
              id="outlined-multiline-static"
              label="Comments"
              multiline
              rows={4}
              placeholder="Enter Comments Here..."
              style={{width: '50%'}}
              onChange={setComment}
            />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            New Workout - Placeholder
                        </TableCell>
                    </TableRow>
                </TableHead>
                {/* <TableBody>
                    {workout.comments ? workout.comments.map((c) => {
                      return(
                        <TableRow key={c.id}>
                        <TableCell>
                          {`User posted ${c.body}`}
                        </TableCell>
                      </TableRow>
                      )
                    }): null}
                </TableBody> */}
            </Table>
          </Dialog>
        </div>
      );
}

export default NewWorkoutForm