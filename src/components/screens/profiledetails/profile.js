
import * as React from 'react';
import { Typography, Toolbar, Avatar } from '@mui/material';
import BottomNavigation from "@mui/material/BottomNavigation";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import './profile-style.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
export default function Profile() {
  return (
    <div>
        <br>
        </br>

    <div className="navigationstyle1">
     <div className='sec-nav-box'>
        <Typography style={{color:"#0A3A67"}}>Subscription</Typography>
       <VerifiedIcon style={{color:'green'}}/>
     </div>
     <div className='sec-nav-box'>
        <Typography style={{color:"#0A3A67"}}>App downloaded</Typography>
       <VerifiedOutlinedIcon style={{color:'green'}}/>
     </div>
     <div className='sec-nav-box'>
        <Typography style={{color:"#0A3A67"}}>Property added</Typography>
       <VerifiedIcon style={{color:'green'}}/>
     </div>
     <div className='sec-nav-box'>
        <Typography style={{color:"#0A3A67"}}>EKYC</Typography>
       <VerifiedIcon style={{color:'green'}}/>
     </div>
     <div className='sec-nav-box'>
        <Typography style={{color:"#0A3A67"}}>Order placed</Typography>
       <VerifiedIcon style={{color:'green'}}/>
     </div>
  </div>
  <br></br>
  <br></br>
  <div className='status-bar'>
  <div className='sec-nav-box1'>
      <div className='number-div' style={{color:"#0A3A67"}}> <h1>02</h1></div>
       <Typography style={{color:"#0A3A67"}}>Total
        Properties</Typography>
     </div>
     <div className='sec-nav-box1'>
      <div style={{color:"#0A3A67"}}> <h1>5.3Cr</h1></div>
       <Typography style={{color:"#0A3A67"}}>Total
        Properties</Typography>
     </div>
     <div className='sec-nav-box1'>
      <div className='number-div1' style={{color:"#0A3A67"}}> <h1>56</h1></div>
       <Typography style={{color:"#0A3A67"}}>Total
        Properties</Typography>
     </div>
     <div className='sec-nav-box1'>
      <Avatar style={{width:70, height:70}}/>
       <Typography style={{color:"#0A3A67"}}>Total
        Properties</Typography>
     </div>

  </div>
      </div>
  );
}

