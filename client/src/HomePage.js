import Grid from '@mui/material/Unstable_Grid2'
import { Box, Container } from '@mui/material';
import Clients from './Clients';
import Workouts from './Workouts';


function HomePage({clients, workouts}){
    return(
        <Box component='main' sx={{flexGrow: 1, py: 8}}>
        <Container maxWidth={false}>
          <Grid container spacing={3}>
          <Grid lg={4}
              md={6}
              xl={3}
              xs={12}>
          <Clients clients={clients} />
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
        <Container style={{ background: '#0e101c', borderStyle: 'solid', borderWidth: '5px' }}>
          {/* <WorkoutForm /> */}
        </Container>
      </Box>
    )
}

export default HomePage