import './App.css';
import { Box, Container } from '@mui/material';
import { makeStyles } from  '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { red }from '@mui/material/colors/';
import Grid from '@mui/material/Unstable_Grid2'
import Clients from './Clients';

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
      <Grid>
        <CustomerStats />
      </Grid>
      </Container>
    </Box>
    </>
  );
}

export default App;
