import './App.css';
import { AppBar, Box, Container, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography, ListItemText } from '@mui/material';
import { makeStyles } from  '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { red }from '@mui/material/colors/';
import Grid from '@mui/material/Unstable_Grid2'
import Clients from './Clients';
import SessionsByMonth from './Sessions-By-Month';
import { useState, useEffect } from 'react';
import WorkoutForm from './WorkoutForm';
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './HomePage';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';



const drawerWidth = 240;
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
  let navigate = useNavigate()

const itemsList = [
  {
    text: "Clients",
    icon: <InboxIcon />,
    onClick: () => navigate('/new-workout')
  },
  {
    text: "Revenue",
    icon: <MailIcon />,
    onClick: () => navigate('/new-workout')
  }
]

  const [clients, setClients] = useState()

  useEffect(() => {
    fetch('/clients')
    .then(r => r.json())
    .then(data => {
        console.log(data)
        setClients(data)
        console.log('clients loaded')
    })
}, [])



  return (
    <>
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar position='fixed' sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant='h6' noWrap component={'div'}>
            ezFit
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' sx={{width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'}}}>
        <Toolbar />
        <Box sx={{overflow: 'auto'}} >
          <List>
            {itemsList.map((item, index) => {
              const {text, icon, onClick} = item
              return (
              <ListItem key={text} disablePadding onClick={onClick}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              )
            })}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    <Box component='main' sx={{ flexGrow: 1, p: 3, background: '#0e101c'}}>
      <Toolbar />
    <Routes>
      <Route path='/' element={<HomePage clients={clients} />} />
      <Route path="new-workout" element={<WorkoutForm />} />
    </Routes>
    </Box>
    </Box>
    </>
  );
}

export default App;
