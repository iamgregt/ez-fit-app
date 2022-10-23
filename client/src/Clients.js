import { CardContent, Typography, Card } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);



function Clients(){

    const [clientCount, setClientCount] = useState()

    useEffect(() => {
        fetch('/clients/clientcount')
        .then(r => r.json())
        .then(resp => {
            setClientCount(resp)
        })
    })

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
        <Card sx={{height: '100%'}}>
            <CardContent>
                <Grid container spacing={3} sx={{ justifyContent: 'space-between'}}>
                    <Grid>
                        <Typography color='textSecondary' gutterBottom variant='overline'>
                            Client Count
                        </Typography>
                        <Typography color='textPrimary' variant='h4'>
                            {clientCount}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <Doughnut data={data} />
        </Card>
        
    )
}

export default Clients