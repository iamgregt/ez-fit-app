import {useState, useEffect} from 'react'
import {Box, Card, CardContent, CardHeader, Divider, Grid, Typography} from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import { height } from '@mui/system'


function ClientChart() {

    const [clientCount, setClientCount] = useState()


        useEffect(() => {
        fetch('/clients/clientcount')
        .then(r => r.json())
        .then(resp => {
            setClientCount(resp)
        })
    }, [])

    const data = {
        datasets: [
          {
            data: [clientCount, 15, 22],
            backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
            borderWidth: 8,
            borderColor: '#FFFFFF',
            hoverBorderColor: '#FFFFFF'
          }
        ],
        labels: ['Cient Count', 'Tablet', 'Mobile']
      };


    return(
        <Card>
            <CardHeader title="Client By Session Type" />
            <Divider />
            <CardContent>
                <Box sx={{height: 300, position: 'relative'}}>
                <Doughnut data={data} />
                </Box>
            </CardContent>
            
        </Card>
    )
}

export default ClientChart