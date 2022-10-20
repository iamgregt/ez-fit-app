import './App.css';
import Trainer from './Trainer';
import Hub from './Hub';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container, Button, ButtonGroup, Paper, Drawer } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { PhotoCamera } from '@mui/icons-material'
import { makeStyles } from  '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { red }from '@mui/material/colors/';
import Sidebar from './Sidebar';



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
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position='relative'>
      <Toolbar>
        <PhotoCamera />
        <Typography variant='h6'>Photo Album</Typography>
      </Toolbar>
    </AppBar>
    
    <main>
      <Paper>
        <Container maxWidth='sm'>
          <Sidebar />
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
            Photo Album
          </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            Hello everyone, this is a photo album and I'm trying to make this sentence as long as possible so that we can see it on the screen. Heck yeah!
          </Typography>
          <div>
            <Grid container spacing={2} columns={2} alignItems='center' justifyContent='center'>
              <Grid>
                <Button variant='contained' color='primary'>
                  See My Photos
                </Button>
              </Grid>
              <Grid>
                <Button variant='outlined' color='primary'>
                  Close My Photos
                </Button>
              </Grid>
            </Grid>
          </div>
        
        </Container>

      </Paper>
      {/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup> */}
    </main>
    </ThemeProvider>
    </>
  );
}

export default App;
