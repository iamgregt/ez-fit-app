import './App.css';
import Trainer from './Trainer';
import Hub from './Hub';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, ButtonGroup } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material'


function App() {
  return (
    <>
    <CssBaseline />
    <AppBar position='relative'>
      <Toolbar>
        <PhotoCamera />
        <Typography variant='h6'>Photo Album</Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div>
        <Container maxWidth='sm'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
            Photo Album
          </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            Hello everyone, this is a photo album and I'm trying to make this sentence as long as possible so that we can see it on the screen. Heck yeah!
          </Typography>
        </Container>
      </div>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    </main>
    </>
  );
}

export default App;
