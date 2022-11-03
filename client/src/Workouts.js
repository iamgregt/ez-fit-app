import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FullScreenDialog from './components/fullscreen-dialog';
import { useContext, useState } from 'react';
import SignIn from './SignIn';
import NewWorkoutForm from './components/new-workout-form';
import { UserContext } from './App';



function Workouts({workouts, setWorkouts, clients}){
  const user = useContext(UserContext)
  console.log(user)
  let myWorkouts = []
  if(user){
    myWorkouts = workouts.filter((w) => w.trainer_id == user.id)
    console.log(myWorkouts)
  }

  return (
    
    <Card>
    <Box sx={{height: '40px'}}>
    </Box>
    <Typography variant='h4'  sx={{fontFamily: 'Roslindale Deck', paddingLeft: '22px', paddingBottom: '18px'}}>
      Latest Workouts
    </Typography>
    <NewWorkoutForm clients={clients} setWorkouts={setWorkouts} />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800, paddingTop: '18px' }}>
        <TableContainer sx={{height: 1250}}>
        <Table sx={{height: 'max-content'}}>
          <TableHead>
            <TableRow>
              <TableCell style={{width:'8%', padding: '16px'}}>
                WO#
              </TableCell>
              <TableCell style={{width: '15%'}}>
                Client Name
              </TableCell>
              <TableCell sortDirection="desc" style={{width: '18%'}}>
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell style={{width: '15%'}}>
                Workout Type
              </TableCell>
              <TableCell>
                Status
              </TableCell>
              <TableCell style={{width: '30%'}}>
              {'Edit Workout'}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myWorkouts ? myWorkouts.map((workout) => {

                const workoutType = workout.virtual === true ? 'Virutal' : 'In-Person'

              return(
  
                  <TableRow
                    hover
                    key={workout.id}
                  >
                    <TableCell>
                      {workout.id}
                    </TableCell>
                    <TableCell>
                      {workout.client.name}
                    </TableCell>
                    <TableCell>
                      {workout.created_at}
                    </TableCell>
                    <TableCell>
                     {workoutType}
                    </TableCell>
                    <TableCell>
                      {workout.status}
                    </TableCell>
                    <TableCell>
                    <FullScreenDialog workout={workout} setWorkouts={setWorkouts} workouts={workouts} />
                    </TableCell>
                  </TableRow>
                
              )
            }) : null}
          </TableBody>
        </Table>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      {/* <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button> */}
    </Box>
  </Card>
  )
}

export default Workouts