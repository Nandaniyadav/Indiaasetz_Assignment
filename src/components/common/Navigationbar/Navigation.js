import * as React from "react";
import "./Navigation-style.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Toolbar, Typography } from "@mui/material";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';


const Navigation = () => {
  return (
      <BottomNavigation className="navigationstyle">
      <Toolbar>
          <div className="loans">Loans</div>
        </Toolbar>
        <Toolbar className="feedback-container">
   
           <HelpOutlineOutlinedIcon className="raiseIcon"/> 
        <Typography className="feedback-text"> Raise a feedback </Typography>
        
        </Toolbar>
      </BottomNavigation>
  )
};

export default Navigation;
