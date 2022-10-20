import { CardContent, Typography, Card } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'



function CustomerStats(){
    return(
        <Card sx={{height: '100%'}}>
            <CardContent>
                <Grid container spacing={3} sx={{ justifyContent: 'space-between'}}>
                    <Grid>
                        <Typography color='textSecondary' gutterBottom variant='overline'>
                            3 client
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default CustomerStats