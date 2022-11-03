import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../App';
  

function AccountProfile(){

    const user = useContext(UserContext)

    return(
        <Card>
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
            width: 64
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {user.first_name}
        </Typography>
        <Typography
          color="textPrimary"
          variant="h5"
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
      >
        Upload pictures
        <input type='file' hidden />
      </Button>
    </CardActions>
  </Card>
    )
}

export default AccountProfile