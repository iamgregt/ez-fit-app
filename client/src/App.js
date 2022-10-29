import './App.css';
import { AppBar, Box, Container, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography, ListItemText } from '@mui/material';
import { makeStyles } from  '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { red }from '@mui/material/colors/';
import Grid from '@mui/material/Unstable_Grid2'
import "bootstrap/dist/css/bootstrap.min.css"
import Clients from './Clients';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './HomePage';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NewClientForm from './NewClientForm';
import DashboardIcon from '@mui/icons-material/Dashboard'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Workouts from './Workouts';
import SignIn from './SignIn';




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
  const [user, setUser] = useState(null)
  const classes = useStyles()
  let navigate = useNavigate()  
  
  const [clients, setClients] = useState()
  const [workouts, setWorkouts] = useState([])
  const [updated, setUpdated] = useState(false)

const itemsList = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    onClick: () => navigate('/')
  },
  {
    text: "Clients",
    icon: <EmojiPeopleIcon />,
    onClick: () => navigate('/clients')
  }, 
  {
    text: "Workouts",
    icon: <FitnessCenterIcon />,
    onClick: () => navigate('/workouts')
  }
]

// useEffect(() => {
//   fetch("/me").then((r) => {
//     if(r.ok) {
//       r.json().then((user) => setUser(user))
//       console.log('cool')  
//       console.log(user)
//     }else{
//       setTimeout(() => {
//         console.log('not signed in')
//         navigate('/sign-in')
//       }, 2000)
//     }
//   })
// }, [])


  useEffect(() => {

    fetch("/me")
    .then(r => {
      if(r.ok) {
        r.json().then(user => setUser(user))
      }
    })


    fetch('/clients')
    .then(r => r.json())
    .then(data => {
        console.log(data)
        setClients(data)
        console.log('clients loaded')
    })

    fetch('/workouts')
    .then(r => r.json())
    .then(resp => {
      setWorkouts(resp)
      console.log(resp)
      console.log('workouts loaded')
    })
}, [])


   if(!user) return <SignIn onLogin={setUser} />

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
            {itemsList.map((item) => {
              const {text, icon, onClick} = item
              return (
              <ListItem key={text} disablePadding onClick={onClick}>
                <ListItemButton>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
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
      <Route path='/' element={<HomePage workouts={workouts} clients={clients} />} />
      <Route path="/new-workout" element={<NewClientForm />} />
      <Route path="/workouts" element ={<Workouts setUpdated={setUpdated} user={user} workouts={workouts} setWorkouts={setWorkouts} clients={clients} />} />
      <Route path="/clients" element={<Clients user={user} clients={clients} workouts={workouts} />} />
      <Route path="/sign-in" element={<SignIn user={user} onLogin={setUser} />} />
    </Routes>
    </Box>
    </Box>
    </>
  );}

export default App;
