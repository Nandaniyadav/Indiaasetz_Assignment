import * as React from "react";
import "./ProfileStatus-style.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import About from "../DetailsAbout/About";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar sx={{background:'#fff',borderRadius:'5px'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Toolbar>
            <div className="div02">02</div>
          </Toolbar>
          <Typography>
            <div className="div53">5.3Cr</div>
            <div className="pending">+Pending</div>
            <div className="networth">Net worth</div>
          </Typography>
          <div className="percentage">66%</div>
          <div className="profilecomplication">
            Profile completion
            <br />
            status
          </div>

          <Box sx={{ flexGrow: 0 }}>
            <Avatar className="profile" alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            <div className="profilename">PRM</div>
            <div className="profilename">Nalini</div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    <About/>
    </>
  );
}
export default ResponsiveAppBar;
