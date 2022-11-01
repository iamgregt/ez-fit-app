import { Avatar, Box, CardContent, Typography, Card, Checkbox, Table, TableBody, TableCell, TableHead, TablePagination,TableRow, Button, TableContainer, } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {useNavigate} from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'

ChartJS.register(ArcElement, Tooltip, Legend);



function Clients({clients}){

    // function newUserAdded(){
    //     this.setState(prevState => ({
    //         clientCount: prevState.clientCount + 1
    //     })) 
    // }

    let navigate = useNavigate() 

    const [clientCount, setClientCount] = useState()
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleSelectAll = (event) => {
      let newSelectedCustomerIds;
  
      if (event.target.checked) {
        newSelectedCustomerIds = clients.map((customer) => customer.id);
      } else {
        newSelectedCustomerIds = [];
      }
  
      setSelectedCustomerIds(newSelectedCustomerIds);
    }

    const handleSelectOne = (event, id) => {
      const selectedIndex = selectedCustomerIds.indexOf(id);
      let newSelectedCustomerIds = [];
  
      if (selectedIndex === -1) {
        newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
      } else if (selectedIndex === 0) {
        newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
      } else if (selectedIndex === selectedCustomerIds.length - 1) {
        newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelectedCustomerIds = newSelectedCustomerIds.concat(
          selectedCustomerIds.slice(0, selectedIndex),
          selectedCustomerIds.slice(selectedIndex + 1)
        );
      }
  
      setSelectedCustomerIds(newSelectedCustomerIds);
    };
  
    const handleLimitChange = (event) => {
      setLimit(event.target.value);
    };
  
    const handlePageChange = (event, newPage) => {
      setPage(newPage);
    };
  



      const options = {
        animation: false,
        cutoutPercentage: 80,
        layout: { padding: 0 },
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        // tooltips: {
        //   backgroundColor: theme.palette.background.paper,
        //   bodyFontColor: theme.palette.text.secondary,
        //   borderColor: theme.palette.divider,
        //   borderWidth: 1,
        //   enabled: true,
        //   footerFontColor: theme.palette.text.secondary,
        //   intersect: false,
        //   mode: 'index',
        //   titleFontColor: theme.palette.text.primary
        // }
      };
    



    return(
        <>
        <Box container='true' sx={{padding: '10px'}}>
        <Button onClick={() => navigate('/new-client')}>Add A Client</Button>
        </Box>
        <Card>
        <Box sx={{ minWidth: 1050 }}>
         <TableContainer sx={{ height: 950 }}>
         <Table sx={{height: 'max-content'}}>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { clients ? clients.map((client) => {
                return(
                  <TableRow
                  hover
                  key={client.id}
                  selected={selectedCustomerIds.indexOf(client.id) !== -1}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={client.avatar}
                        sx={{ mr: 2 }}
                      >
                        What
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {client.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {client.email}
                  </TableCell>
                  <TableCell>
                    {/* {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`} */}
                  </TableCell>
                  <TableCell>
                    {client.phone}
                  </TableCell>
                  {/* <TableCell>
                    {format(customer.createdAt, 'dd/MM/yyyy')}
                  </TableCell> */}
                </TableRow>
                )
              } 
                
              ) : null}
            </TableBody>
          </Table>
         </TableContainer>
        </Box>
      {/* <TablePagination
        component="div"
        count={parseInt(clientCount) || 0}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
        </>
        
    )
}

export default Clients