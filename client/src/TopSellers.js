import { formatDistanceToNow, subHours } from 'date-fns';
// import { v4 as uuid } from 'uuid';
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
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';

// const products = [
//   {
//     id: uuid(),
//     name: 'Dropbox',
//     imageUrl: '/static/images/products/product_1.png',
//     updatedAt: subHours(Date.now(), 2)
//   },
//   {
//     id: uuid(),
//     name: 'Medium Corporation',
//     imageUrl: '/static/images/products/product_2.png',
//     updatedAt: subHours(Date.now(), 2)
//   },
//   {
//     id: uuid(),
//     name: 'Slack',
//     imageUrl: '/static/images/products/product_3.png',
//     updatedAt: subHours(Date.now(), 3)
//   },
//   {
//     id: uuid(),
//     name: 'Lyft',
//     imageUrl: '/static/images/products/product_4.png',
//     updatedAt: subHours(Date.now(), 5)
//   },
//   {
//     id: uuid(),
//     name: 'GitHub',
//     imageUrl: '/static/images/products/product_5.png',
//     updatedAt: subHours(Date.now(), 9)
//   }
// ];

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
       <Box sx={{width: 600}}>
         <Card>
        <CardHeader
          subtitle={`${topSellers.length} in total`}
          title="Top Sellers"
        />
        <Divider />
        <List>
          {topSellers.map((product, i) => (
            <ListItem
              divider={i < topSellers.length - 1}
              key={product.id}
            >
              <ListItemAvatar>
                <img
                  alt={product.first_name}
                  src={product.avatar}
                  style={{
                    height: 48,
                    width: 48
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${product.first_name} ${product.last_name}  has sold ${product.workouts_sold} workouts!`}
                // secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
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
       </Box>
    )
}

export default TopSellers