import {useState, useEffect} from 'react'
import {Box, Card, CardContent, CardHeader, Divider, Grid, Typography} from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import { height } from '@mui/system'
import { useTheme } from '@emotion/react'


function ClientChart() {

    const [clientCount, setClientCount] = useState()
    const theme = useTheme()

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
      const options = {
        animation: false,
        cutoutPercentage: 80,
        layout: { padding: 0 },
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          backgroundColor: theme.palette.background.paper,
          bodyFontColor: theme.palette.text.secondary,
          borderColor: theme.palette.divider,
          borderWidth: 1,
          enabled: true,
          footerFontColor: theme.palette.text.secondary,
          intersect: false,
          mode: 'index',
          titleFontColor: theme.palette.text.primary
        }
      };

    return(
        <Card>
            <CardHeader title="Client By Session Type" />
            <Divider />
            <CardContent>
                <Box sx={{height: 300, position: 'relative'}}>
                <Doughnut data={data} options={options} />
                </Box>
            </CardContent>
            
        </Card>
    )
}

export default ClientChart