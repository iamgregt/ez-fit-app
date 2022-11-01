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
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FullScreenDialog from './components/fullscreen-dialog';
import { useContext, useState } from 'react';
import SignIn from './SignIn';
import NewWorkoutForm from './components/new-workout-form';
import { UserContext } from './App';

const orders = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'refunded'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  }
];

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
    <CardHeader title="Latest Workouts" />
    <NewWorkoutForm clients={clients} setWorkouts={setWorkouts} />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800, paddingTop: '18px' }}>
        <TableContainer sx={{height: 950}}>
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
              <TableCell>
              {''}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myWorkouts ? myWorkouts.map((workout) => {
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
                     {workout.name}
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
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
  )
}

export default Workouts