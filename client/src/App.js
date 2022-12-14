import './App.css';
import { Paper, AppBar, Box, Divider, Drawer, Toolbar, Typography, Button } from '@mui/material';
// import { makeStyles } from  '@mui/styles'
import { ThemeProvider } from '@mui/material/styles'
import "bootstrap/dist/css/bootstrap.min.css"
import Clients from './Clients';
import { useState, useEffect, createContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './HomePage';
import NewClientForm from './NewClientForm';
import DashboardIcon from '@mui/icons-material/Dashboard'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Workouts from './Workouts';
import SignIn from './SignIn';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { NavItem } from './components/nav-item';
import { theme } from './theme/'
import Account from './Account';
 
export const UserContext = createContext()


const drawerWidth = 300;

// const useStyles = makeStyles({
//   drawer: {
//     width: 240,
//   }
// })


function App() {
  const [user, setUser] = useState(null)
  // const classes = useStyles()
  let navigate = useNavigate()  
  
  const [clients, setClients] = useState()
  const [workouts, setWorkouts] = useState([])
  const [updated, setUpdated] = useState(false)
  const [trainers, setTrainers] = useState([])

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
  },
  {
    text: "Account",
    icon: <ManageAccountsIcon />,
    onClick: () => navigate('/account')
  }
]


  function handleLogout(){
    fetch('/logout',{
      method: "DELETE"
    })
    .then(() => {
      navigate('/')
      setUser()
    })
  }


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


    fetch('/trainers')
    .then(r => r.json())
    .then(resp => {
      setTrainers(resp)
      console.log(resp)
    })


}, [])


   if(!user) return <SignIn onLogin={setUser} />
  console.log(user)
  return (
    <>

      
      <ThemeProvider theme={theme}>
      <Paper maxHeight={true} sx={{height: '100vh', display: 'flex'}}>
      <AppBar position='fixed' sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{backgroundColor: 'rgb(37,35,43)'}}>
          <Typography variant='h6' noWrap component={'div'} style={{scale: '1.9', marginLeft: '20px', fontFamily: 'Roslindale Deck'}}>
            ezFit
          </Typography>
          <Button style={{background: 'none', scale:'1.2'}} sx={{marginRight: 5, marginLeft: 'auto'}} onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box'}}}>
        <Toolbar />       
        <Box sx={{overflow: 'auto', backgroundColor: 'rgb(37,35,43);', height: '100%', paddingTop: '13px'}} >
          <Box sx={{flexGrow: 1}}>
            {itemsList.map((i) => {
              return(
                <NavItem title={i.text} onClick={i.onClick} key={i.text} sx={{pt: '10px'}} />
              )
            })}
          </Box>
          {/* <List>
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
          </List> */}
          <Divider />
          
        </Box>
      </Drawer>
    <Box component='main' sx={{ flexGrow: 1, p: 3}}>
      <Toolbar />
      <UserContext.Provider value={user}>
    <Routes>
      
      <Route path='/' element={<HomePage workouts={workouts} clients={clients} />} />
      <Route path="/new-client" element={<NewClientForm />} />
      <Route path="/workouts" element ={<Workouts setUpdated={setUpdated} workouts={workouts} setWorkouts={setWorkouts} clients={clients} />} />
      <Route path="/clients" element={<Clients clients={clients} workouts={workouts} trainers={trainers} />} />
      <Route path="/sign-in" element={<SignIn onLogin={setUser} />} />
      <Route path='/account' element={<Account setUser={setUser} />} />
    </Routes>
    </UserContext.Provider>
    </Box>
    </Paper>
      </ThemeProvider>
    </>
  );}

export default App;
