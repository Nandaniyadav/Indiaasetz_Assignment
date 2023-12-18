import * as React from "react";
import './sidebar-style.css'
import Box from "@mui/material/Box";
import GridViewIcon from '@mui/icons-material/GridView';
import { Toolbar } from "@mui/material";
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import VillaOutlinedIcon from '@mui/icons-material/VillaOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const Sidebar = () => {
  return (
    <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            className="sidebar-container"
          >
            <Toolbar sx={{height:'10px'}}>
            <GridViewIcon sx={{color:'#a3b5c6'}}/>
           <div className="dashboard">Dashboard</div>
            </Toolbar>
            <Toolbar>
              <Groups2OutlinedIcon sx={{color:'#a3b5c6'}}/>
              <div className="dashboard">Leads</div> 
            </Toolbar>

            <Toolbar>
              <VpnKeyOutlinedIcon sx={{color:'#a3b5c6'}}/>
              <div className="dashboard">Buyer</div> 
            </Toolbar>

            <Toolbar>
              <PermIdentityOutlinedIcon sx={{color:'#a3b5c6'}}/>
              <div className="dashboard">Clients</div> 
            </Toolbar>

            <Toolbar>
              <VillaOutlinedIcon sx={{color:'#a3b5c6'}}/>
              <div className="dashboard">Properties</div> 
            </Toolbar>

            <Toolbar>
              <VillaOutlinedIcon sx={{color:'#a3b5c6'}}/>
              <div className="dashboard">Order</div> 
              <ArrowDropUpIcon sx={{color:'#a3b5c6'}}/>
            </Toolbar>
            <Toolbar>
            <div className="dashboardNonIcons" >Transactional</div> 
            </Toolbar>
            <Toolbar>
            <div className="dashboardNonIcons">Non-Transactional</div> 
            </Toolbar>
            <Toolbar>
              <WhatshotOutlinedIcon sx={{color:'#a3b5c6'}}/>
              <div className="dashboard">RedBox</div> 
            </Toolbar>

            <Toolbar>
              <PhoneCallbackOutlinedIcon sx={{color:'#a3b5c6'}}/>
              <div className="dashboard">Call Back</div> 
            </Toolbar>
            <Toolbar>
              <Brightness4OutlinedIcon sx={{color:'#a3b5c6'}}/>
              <div className="dashboard">Investments</div> 
            </Toolbar>
            <Toolbar>
              <AccountBalanceWalletOutlinedIcon sx={{color:'#a3b5c6'}}/>
              <div className="dashboard">Payments</div> 
            </Toolbar>

            <Toolbar>
              <AssuredWorkloadOutlinedIcon sx={{color:'#a3b5c6'}}/>
              <div className="dashboard">Loan</div> 
              <ArrowDropDownOutlinedIcon sx={{color:'#a3b5c6'}}/>
            </Toolbar>
            <Toolbar>
            <div className="dashboardNonIcons" >LAP</div> 
            </Toolbar>
            <Toolbar>
            <div className="dashboardNonIcons">Home Loan</div> 
            </Toolbar>
            <Toolbar>
              <Brightness4OutlinedIcon sx={{color:'#a3b5c6'}}/>
              <div className="dashboard">MAGIK</div> 
            </Toolbar>
            <Toolbar>
              <AssuredWorkloadOutlinedIcon sx={{color:'#a3b5c6'}}/>
              <div className="dashboard">ST</div> 
              <ArrowDropDownOutlinedIcon sx={{color:'#a3b5c6'}}/>
            </Toolbar>
            <Toolbar>
            <div className="dashboardNonIcons" >ST Clients</div> 
            </Toolbar>
            <Toolbar>
            <div className="dashboardNonIcons">Home Loan</div> 
            </Toolbar>
          </Box>
  )
}

export default Sidebar;