import { CardContent, Typography, Card } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);



function Clients(){

    const [clientCount, setClientCount] = useState([])

    const data = {
        datasets: [
          {
            data: [63, 15, 22],
            backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
            borderWidth: 8,
            borderColor: '#FFFFFF',
            hoverBorderColor: '#FFFFFF'
          }
        ],
        labels: ['Desktop', 'Tablet', 'Mobile']
      };
    

    useEffect(() => {
        fetch('/clients')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setClientCount(data.length)
            console.log('clients loaded')
        })
    }, [])

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