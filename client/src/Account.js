import {useContext} from 'react'
import { UserContext } from './App'
import { Box, Container, Grid, Typography } from '@mui/material';
import AccountProfile from './components/account-profile';
import AccountProfileDetails from './components/account-profile-details';



function Account({setUser}){

    const user = useContext(UserContext)

    return(
        <>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8
          }}
        >
          <Container maxWidth="lg">
            <Typography
              sx={{ mb: 3 }}
              variant="h4"
              color='#f8f9fa'
            >
              Account
            </Typography>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
              >
                <AccountProfile />
              </Grid>
              <Grid
                item
                lg={8}
                md={6}
                xs={12}
              >
                <AccountProfileDetails setUser={setUser} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    )
}

export default Account