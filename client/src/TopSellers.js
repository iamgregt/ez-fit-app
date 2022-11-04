import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion/dist/framer-motion'


function TopSellers(){

    const [topSellers, setTopSellers] = useState([])

    useEffect(() => {
        fetch('/trainers/top-sellers')
        .then(r => r.json())
        .then(resp => {
            setTopSellers(resp)
        })
    }, [])



    return(
      <Paper elevation='24' component={motion.div} 
      initial={{ y:0, opacity: 0, scale: 0.5}}
      animate={{y: 0, opacity: 1, scale: 1}}
      exit={{y: "50%", opacity: 0, transition: {duration: 2}}}
      transition={{duration: 0.6, ease: "easeOut"}}
      whileHover={{scale: 1.035}}>
         <Card>
        <CardHeader
          subtitle={`${topSellers.length} in total`}
          title="Top Sellers"
        />
        <Divider />
        <List>
          {topSellers.map((seller, i) => (
            <ListItem
              divider={i < topSellers.length - 1}
              key={seller.id}
            >
              <ListItemAvatar>
                <img
                  alt={seller.first_name}
                  src={seller.avatar}
                  style={{
                    height: 48,
                    width: 48
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${seller.first_name} ${seller.last_name}  has sold ${seller.workouts_sold} workouts!`}
              />
              <IconButton
                edge="end"
                size="small"
              >
                <MoreVertIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            endIcon={<ArrowRightIcon />}
            size="small"
            variant="text"
          >
            View all
          </Button>
        </Box>
      </Card>
       </Paper>
    )
}

export default TopSellers