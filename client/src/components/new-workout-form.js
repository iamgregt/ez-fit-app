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
import { Box, Table, TableCell, TableHead, TextField, TableRow, TableBody, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { useState } from 'react';
import { NavItem } from './nav-item';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function NewWorkoutForm({clients}){

    const [open, setOpen] = useState(false);
    const [newWorkout, setNewWorkout] = useState({
        name: "",
        date_time: null,
        trainer_id: 1,
        virtual: null, 
        cost: null
    })






    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClickClose = () => {
        setOpen(false);
      };

      const handleClose = (e) => {
        setOpen(false);
        console.log(e)
        console.log(newWorkout)
    
        const workoutData = {
            
        }

    
        
      };


    return (
        <div>
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
                    value={5}
                    label="Client"
                    // onChange={handleChange}
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
              <ListItem button>
                <ListItemText
                  primary="Workout Type"
                  secondary="Placeholder Text"
                />
              </ListItem>
              <TextField
              id="outlined-multiline-static"
              label="Notes"
              multiline
              rows={4}
              placeholder="Enter Notes Here..."
              style={{width: '50%'}}
              onChange={setNewWorkout}
            />
            </List>
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