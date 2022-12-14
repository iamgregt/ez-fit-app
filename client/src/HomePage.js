import Grid from '@mui/material/Unstable_Grid2'
import { Paper, Box, Container } from '@mui/material';
import Clients from './Clients';
import Workouts from './Workouts';
import {Card, CardContent, Typography} from '@mui/material'
import {useEffect, useState} from 'react'
import ClientChart from './ClientChart';
import TopSellers from './TopSellers';
import SalesChart from './SalesChart'
import Header from './Header';
import { motion } from 'framer-motion/dist/framer-motion'



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
        <>
        <Header />
        <Box component='main' sx={{flexGrow:1, py: 5}}>
        
        <Container maxWidth={false} component={motion.div} >
          <Grid container spacing={10} style={{display: 'flex', flexFlow: 'row wrap', marginTop: '-24px', width: 'calc(100% + 24px)', marginLeft: '-24px', boxSizing: 'border-box'}}>
          <Grid item lg={4}
              md={6}
              xl={4}
              xs={12}
              sx={{maxWidth: true}}>
              
          <ClientChart />
        </Grid>
        <Grid
              item lg={4}
              md={6}
              xl={4.5}
              xs={12}
              sx={{maxWidth: true}}
            >
              <TopSellers />
            </Grid>
            <Grid
            item
            lg={9}
            md={13}
            xl={10}
            xs={12}
          >
            <SalesChart workouts={workouts} />
          </Grid>
          </Grid>
        <Grid></Grid>
        </Container>
        </Box>

        </>
    )
}

export default HomePage