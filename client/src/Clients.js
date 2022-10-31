import { Avatar, Box, CardContent, Typography, Card, Checkbox, Table, TableBody, TableCell, TableHead, TablePagination,TableRow, } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);



function Clients({clients}){

    // function newUserAdded(){
    //     this.setState(prevState => ({
    //         clientCount: prevState.clientCount + 1
    //     })) 
    // }

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
        <Card>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === clientCount}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < clients.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
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
              { clients ? clients.map((customer) => {
                return(
                  <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={customer.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        What
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  <TableCell>
                    {/* {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`} */}
                  </TableCell>
                  <TableCell>
                    {customer.phone}
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
        </Box>
      <TablePagination
        component="div"
        count={parseInt(clientCount) || 0}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
        </>
        
    )
}

export default Clients