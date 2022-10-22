import './App.css';
import { Box, Container } from '@mui/material';
import { makeStyles } from  '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { red }from '@mui/material/colors/';
import Grid from '@mui/material/Unstable_Grid2'
import Clients from './Clients';
import SessionsByMonth from './Sessions-By-Month';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500]
    }
  }
});

const useStyles = makeStyles({
  drawer: {
    width: 240,
  }
})


function App() {
  const classes = useStyles()

  return (
    <>
    <Box component='main' sx={{flexGrow: 1, py: 8}}>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
        <Grid lg={4}
            md={6}
            xl={3}
            xs={12}>
        <Clients />
      </Grid>
      <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <SessionsByMonth />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  );
}

export default App;
