import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from './App';
import { Box } from '@mui/material'
import './Header.css'
import {motion} from 'framer-motion/dist/framer-motion'





function Header(){

    const user = useContext(UserContext)

    return(
        <>
        <Box component='div' sx={{display: 'flex'}}>
            <Box component={motion.div} sx={{pt: '20px', pl: '25px'}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <AddBoxOutlinedIcon className='icon' />
            </Box>
            <Box component='div' sx={{pl: '15px'}} >
            <Typography sx={{ fontFamily: 'Roslindale Deck'}} variant='h2' >{`${user.first_name}'s dashboard`}</Typography>
            </Box>
        </Box>
        </>
    )
}

export default Header