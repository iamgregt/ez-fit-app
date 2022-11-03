import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Avatar, Box, ListItemAvatar } from '@mui/material';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ClientPopover({client, trainers}) {
  const [open, setOpen] = React.useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(client.workouts)

  
  

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        ...
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {client.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Full Name" secondary={client.name} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Email Address"
              secondary={client.email}
            />
          </ListItem>
        </List>
        <Box>
            <Divider />
            <Typography variant='h3'>Previous Trainers</Typography>
            <List>
                {client.trainers ? client.trainers.map((t) => {
                    return(
                        <ListItem key={t.id}>
                        <ListItemAvatar>
                          <Avatar alt={`${t.first_name} ${t.last_name}`} src={t.avatar} />
                        </ListItemAvatar>
                        <ListItemText>{t.first_name} {t.last_name}</ListItemText>
                    </ListItem>
                    )
                }): null}
            </List>
        </Box>
      </Dialog>
    </div>
  );
}
