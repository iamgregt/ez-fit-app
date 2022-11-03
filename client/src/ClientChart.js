import {useState, useEffect, useContext} from 'react'
import {Box, Card, CardContent, CardHeader, Divider, Grid, Paper, Typography} from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import { height } from '@mui/system'
import { useTheme } from '@emotion/react'
import { UserContext } from './App'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';

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

      const clientData = [
        {
          type: "Virtual",
          value: sessionsByType.virtual,
          icon: LaptopMacIcon
        },
        {
          type: "In Person",
          value: sessionsByType.in_person,
          icon: SportsGymnasticsIcon
        }
      ]

    return(
        <Paper elevation='24'>
          <Card>
            <CardHeader title="Client By Session Type" />
            <Divider />
            <CardContent>
                <Box sx={{height: 300, position: 'relative'}}>
                <Doughnut data={data} options={options} />
                </Box>
                <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {clientData.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {value}
                
              </Typography>
            </Box>
            ))}
             </Box>
            </CardContent>

            
        </Card>
        </Paper>
    )
}

export default ClientChart