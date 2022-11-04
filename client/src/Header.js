import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Divider, Tooltip, Typography } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from './App';
import { Box } from '@mui/material'
import './Header.css'
import {motion} from 'framer-motion/dist/framer-motion'
import { useNavigate } from 'react-router-dom';





function Header(){

    let navigate = useNavigate()

    function handleClick(){
        navigate('/new-client')
    }

    const user = useContext(UserContext)

    return(
        <>
        <Box className='header-main' component='div' sx={{display: 'flex'}}>
            <Box component={motion.div} sx={{pt: '20px', pl: '25px'}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Tooltip title='Add A Client' enterDelay='320' >
            <AddBoxOutlinedIcon onClick={handleClick} className='icon' />
            </Tooltip>
            </Box>
            <Box component='div' sx={{pl: '15px'}} >
            <Typography sx={{ fontFamily: 'Roslindale Deck'}} variant='h2' >{`${user.first_name}'s dashboard`}</Typography>
            </Box>
        </Box>
        <Box className='dash-nav' sx={{display: 'flex', marginLeft: 3, mt: 3}} >
            <Typography className='dashboard-text' sx={{fontFamily: "Mulish", fontSize:28}} >Stats</Typography>
        </Box>
        </>
    )
}

export default Header