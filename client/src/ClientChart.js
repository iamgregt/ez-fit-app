import {useState, useEffect, useContext} from 'react'
import {Box, Card, CardContent, CardHeader, Divider, Grid, Typography} from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import { height } from '@mui/system'
import { useTheme } from '@emotion/react'
import { UserContext } from './App'


function ClientChart() {

    const user = useContext(UserContext)

    const [clientCount, setClientCount] = useState()
    const [sessionsByType, setSessionsByType] = useState({
      virtual:0,
      in_person:0
    })
    const theme = useTheme()

        useEffect(() => {
        fetch('/clients/clientcount')
        .then(r => r.json())
        .then(resp => {
            setClientCount(resp)
        })


        fetch(`trainers/${user.id}/workouts-count`)
        .then(r => r.json())
        .then(resp => {
          setSessionsByType(resp)
          console.log(resp)
          console.log(sessionsByType)
        })
    }, [])

    const data = {
        datasets: [
          {
            data: [sessionsByType.virtual, sessionsByType.in_person],
            backgroundColor: ['#e53935','#3F51B5'],
            borderWidth: 8,
            borderColor: '#FFFFFF',
            hoverBorderColor: '#FFFFFF'
          }
        ],
        labels: ['Virutal', 'In-Person']
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