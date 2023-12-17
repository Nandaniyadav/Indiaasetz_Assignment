import * as React from "react";
import "./Navigation-style.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Toolbar } from "@mui/material";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';


const Navigation = () => {
  return (
    <>
      <BottomNavigation className="navigationstyle">
      <Toolbar>
          <div className="loans">Loans</div>
        </Toolbar>
        <Toolbar>
          <div className="raise">
            <HelpOutlineOutlinedIcon className="raiseIcon"/> 
            Raise a feedback</div>
        </Toolbar>
      </BottomNavigation>
      
    </>
  );
};

export default Navigation;
