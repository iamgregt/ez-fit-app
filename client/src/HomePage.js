import Grid from '@mui/material/Unstable_Grid2'
import { Box, Container } from '@mui/material';
import Clients from './Clients';
import Workouts from './Workouts';
import {Card, CardContent, Typography} from '@mui/material'
import {useEffect, useState} from 'react'
import ClientChart from './ClientChart';



function HomePage({clients, workouts}){
  const [clientCount, setClientCount] = useState()

  
  
  
  useEffect(() => {
    fetch('/clients/clientcount')
    .then(r => r.json())
    .then(resp => {
        setClientCount(resp)
    })
}, [])

const data = {
    datasets: [
      {
        data: [clientCount, 15, 22],
        backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['Cient Count', 'Tablet', 'Mobile']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    // tooltips: {
    //   backgroundColor: theme.palette.background.paper,
    //   bodyFontColor: theme.palette.text.secondary,
    //   borderColor: theme.palette.divider,
    //   borderWidth: 1,
    //   enabled: true,
    //   footerFontColor: theme.palette.text.secondary,
    //   intersect: false,
    //   mode: 'index',
    //   titleFontColor: theme.palette.text.primary
    // }
  };


    return(
        <Box component='main' sx={{flexGrow:1, py: 8}}>
        
        <Container maxWidth={false}>
          <Grid container spacing={3} style={{display: 'flex', flexFlow: 'row wrap', marginTop: '-24px', width: 'calc(100% + 24px)', marginLeft: '-24px', boxSizing: 'border-box'}}>
          <Grid item lg={4}
              md={6}
              xl={3}
              xs={12}>
              
          <ClientChart />
        </Grid>
        <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              {workouts ? <Workouts clients={clients} workouts={workouts}/> : null}
            </Grid>
            
          </Grid>
        </Container>
      </Box>
    )
}

export default HomePage