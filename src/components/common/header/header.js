import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './header-style.css'
import Avatar from '@mui/material/Avatar';
import './use-iamge.png'
import { BsArrowLeftCircle } from "react-icons/bs";
import { Inputbox } from '../inputfield/input';
import { Headerbutton } from '../../button/header-button';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { Toolbar, Typography } from '@mui/material';




export default function MediaCard() {
  return (
    <div className='header-container'>
     <Card className='conatant'>
      <CardContent sx={{ display: 'flex', justifyContent:'space-between', padding:0}} className='box-container'>
        <div className='profile-image'>
        <div className='image'>
        <Avatar  src="use-iamge.png" />
        </div>
        <div className='details'>
         <p className='id-details'>Partner code : IA234522</p>
         <p className='id-details'>Referral code : IA234522</p>
        </div>
       
          <BsArrowLeftCircle style={{fontSize:40, color:'var(--blue, #0A3A67)', fontWeight:300}}/>
        </div>
        <div className='profile-image1'>
          <Inputbox/>
        </div>
        <div className='profile-button'>
          <Headerbutton/>
        </div>
        <div className='profile-icons'>
        <div className='iconst-props'><FaRegFileAlt style={{fontSize:30, color:'#0A3A67', paddingTop:5}}/></div>
        <div className='iconst-props'>
        <FaRegBell style={{fontSize:30, color:'#0A3A67', paddingTop:5}}/>
        </div>
        <div className='iconst-props'>
        <BsThreeDotsVertical style={{fontSize:30, color:'#0A3A67', paddingTop:5}}/>
        </div>
        </div>
      </CardContent>
    </Card>
    </div>
   
  );
}