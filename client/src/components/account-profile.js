import {
  Alert,
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@mui/material';
import { useContext, useState } from 'react';
import { UserContext } from '../App';
  

function AccountProfile(){

    const user = useContext(UserContext)
    const [alert, setAlert] = useState(false)

   function handleClick(){
      setAlert(!alert)
    }

    return(
        <Card>
          {alert ? <Alert severity="warning">Upload Avatar Coming Soon!</Alert> : null}
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64,
            scale: '1.2'
            
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h4"
          sx={{fontFamily: 'Roslindale Deck'}}
        >
          {user.first_name}
        </Typography>
        <Typography
          color="textPrimary"
          variant="h4"
          sx={{mt: -1.8, fontFamily: 'Roslindale Deck'}}
        >
          {user.last_name}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="outlined"
        component="label"
        type='submit'
        onClick={handleClick}
      >
        Upload Avatar
        {/* <input type='file' hidden /> */}
      </Button>
    </CardActions>
  </Card>
    )
}

export default AccountProfile