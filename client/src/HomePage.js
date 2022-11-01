import Grid from '@mui/material/Unstable_Grid2'
import { Box, Container } from '@mui/material';
import Clients from './Clients';
import Workouts from './Workouts';
import {Card, CardContent, Typography} from '@mui/material'
import {useEffect, useState} from 'react'
import ClientChart from './ClientChart';
import TopSellers from './TopSellers';
import {SalesChart} from './SalesChart';



function HomePage({clients, workouts}){
  const [clientCount, setClientCount] = useState()

  
  
  
  useEffect(() => {
    fetch('/clients/clientcount')
    .then(r => r.json())
    .then(resp => {
        setClientCount(resp)
    })
}, [])



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
              <TopSellers />
            </Grid>
            <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <SalesChart workouts={workouts} />
          </Grid>
          </Grid>
        <Grid></Grid>
        </Container>
      </Box>
    )
}

export default HomePage