import * as React from 'react';
import './Heading-style.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const Heading = () => {
  return (
    <div> <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{background:'#0A3A67'}}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          
        </IconButton>
        <Typography className='subscribe' component="div">
        Subscription
            <CheckCircleOutlineIcon className='tick'/>
        </Typography>
        
        <Typography className='subscribe' component="div">
        App downloaded
            <CheckCircleOutlineIcon className='tick'/>
        </Typography>

        <Typography className='subscribe' component="div">
        Property added
            <CheckCircleOutlineIcon className='tick'/>
        </Typography>

        <Typography className='subscribe' component="div">
        EKYC
            <CheckCircleOutlineIcon className='tick'/>
        </Typography>

        <Typography className='subscribe' component="div">
        Order placed
            <CheckCircleOutlineIcon className='tick'/>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box></div>
  )
}

export default Heading