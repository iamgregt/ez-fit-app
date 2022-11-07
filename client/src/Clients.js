import { Avatar, Box, CardContent, Typography, Card, Checkbox, Table, TableBody, TableCell, TableHead, TablePagination,TableRow, Button, TableContainer, } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {useNavigate} from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import ClientPopover from "./components/client-popover";


ChartJS.register(ArcElement, Tooltip, Legend);



function Clients({clients, trainers}){



    let navigate = useNavigate() 


    



    return(
        <>

        <Card>
        <Box sx={{height: '36px'}}>
    </Box>
    <Typography variant='h4'  sx={{ fontFamily: 'Roslindale Deck', paddingLeft: '10px', paddingBottom: '18px'}}>
      Client Page
    </Typography>
    <Box container='true' sx={{paddingBottom: '20px', paddingLeft: '10px'}}>
        <Button onClick={() => navigate('/new-client')}>Add A Client</Button>
        </Box>
        <Box sx={{ minWidth: 1050 }}>
         <TableContainer sx={{ height: 1340 }}>
         <Table sx={{height: 'max-content'}}>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Weight
                </TableCell>
                <TableCell>
                  Total Workouts
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
                <TableCell>
                  View Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { clients ? clients.map((client) => {
                return(
                  <TableRow
                  hover
                  key={client.id}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={client.avatar}
                        sx={{ mr: 2 }}
                      >
                        What
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {client.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {client.email}
                  </TableCell>
                  <TableCell
                    sx={{paddingLeft: '30px'}}
                  >
                    {client.weight}
                  </TableCell>
                  <TableCell
                  sx={{paddingLeft: '60px'}}
                  >
                    {client.total_workouts}
                  </TableCell>
                  <TableCell>
                    {client.created_at}
                  </TableCell>
                  <TableCell>
                    <ClientPopover client={client} trainers={trainers} />
                  </TableCell>
                </TableRow>
                )
              } 
                
              ) : null}
            </TableBody>
          </Table>
         </TableContainer>
        </Box>
    </Card>
        </>
        
    )
}

export default Clients