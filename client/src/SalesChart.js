import { Bar } from 'react-chartjs-2';
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme, Paper } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion/dist/framer-motion'
 

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function SalesChart({workouts}) {
    let navigate = useNavigate()

  const theme = useTheme();
  const months = [ "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December" ]
  
  const current = new Date()
  const date = current.getMonth()

  const workoutFilter = workouts ? workouts.filter(w => w.month === 9) : null
  console.log(workoutFilter)

  const data = {
    datasets: [
      {
        backgroundColor: '#3F51B5',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [workouts.filter(w => w.month == 3).length, workouts.filter(w => w.month == 4).length, workouts.filter(w => w.month == 5).length, workouts.filter(w => w.month == 6).length, workouts.filter(w => w.month == 7).length, workouts.filter(w => w.month == 8).length, workouts.filter(w => w.month == 9).length],
        label: 'This year',
        maxBarThickness: 10
      },
      {
        backgroundColor: '#EEEEEE',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [11, 20, 12, 29, 30, 25, workouts.filter(w => w.month == 9).length],
        label: 'Last year',
        maxBarThickness: 10
      }
    ],
    labels: [ months[date - 6] , months[date - 5], months[date - 4], months[date - 3], months[date - 2], months[date - 1], months[date]]
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        }
      }
    ],
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

  return (
    <Paper elevation={"24"} component={motion.div} 
    initial={{y: "50%", opacity: 0, scale: 0.5}}
            animate={{y: 0, opacity: 1, scale: 1}}
            exit={{y: "50%", opacity: 0, transition: {duration: 2}}}
            transition={{duration: 0.6, ease: "easeOut"}}
            whileHover={{scale: 1.035}}
    >
      <Card>
      <CardHeader
        action={(
          <Button
            size="small"
          >
            Last 7 Months
          </Button>
        )}
        title="Sessions By The Month 2021/2022"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          onClick={() => navigate('/workouts')}
        >
          Overview
        </Button>
      </Box>
    </Card>
    </Paper>
  );
};

export default SalesChart