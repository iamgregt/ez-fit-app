import { CardContent, Typography, Card } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from "react";



function Clients(){

    const [clientCount, setClientCount] = useState()

    useEffect(() => {
        fetch('/customers')
    })

    return(
        <Card sx={{height: '100%'}}>
            <CardContent>
                <Grid container spacing={3} sx={{ justifyContent: 'space-between'}}>
                    <Grid>
                        <Typography color='textSecondary' gutterBottom variant='overline'>
                            Client Count
                        </Typography>
                        <Typography color='textPrimary' variant='h4'>
                            3
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Clients