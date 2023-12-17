import * as React from "react";
import "./About-style.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Avatar, Grid, Toolbar,Item} from "@mui/material";


const About = () => {
  return (
    <div className="aboutcontainer">
      <Card sx={{ minWidth: 345 }}>
        <Toolbar>
          <Avatar
            className="aboutprofile"
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </Toolbar>
        <Toolbar>
          <div className="profileName">Cameron Williamson</div>
        </Toolbar>
        <Toolbar>
          <div className="aboutheading">About</div>
        </Toolbar>
        <Toolbar>
          <div className="about">
            Global real etstae investor Contrary to popular belief, Lorem Ipsum
            is not simply random text. It has roots in a piece of classical
            Latin Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin
          </div>
        </Toolbar>

        <CardMedia />
      </Card>
<Toolbar>
    <div className="aboutheading">Personal Details</div>
</Toolbar>
<Card sx={{ minWidth: 345 }}>
    <CardMedia/>
</Card>
{/* Create Grid */}
<div className="divcontainer">
<Grid container >
<Grid xs={3} className="grids">Client Id</Grid>
<Grid xs={3} className="grids">Onboarded by</Grid>
<Grid xs={3} className="grids">DOB</Grid>
<Grid xs={3} className="grids">Gender</Grid>
</Grid>

<Grid container className="gridcontainer">
<Grid xs={3} className="gridsline2style">IA-12345</Grid>
<Grid xs={3} className="gridsline2style">Azeez</Grid>
<Grid xs={3} className="gridsline2style">14.05.1985</Grid>
<Grid xs={3} className="gridsline2style">Female</Grid>
</Grid>

<Grid container className="gridcontainer">
<Grid xs={3} className="gridsline3">Contact</Grid>
<Grid xs={3} className="gridsline3">Email</Grid>
<Grid xs={3} className="gridsline3">Occupation</Grid>
<Grid xs={3} className="gridsline3">Pin code</Grid>
</Grid>

<Grid container className="gridcontainer">
<Grid xs={3} className="gridsline2style">+91 9999999999</Grid>
<Grid xs={3} className="gridsline2style">xyz123@gmail.com</Grid>
<Grid xs={3} className="gridsline2style">Business</Grid>
<Grid xs={3} className="gridsline2style">560001</Grid>
</Grid>

<Grid container className="gridcontainer">
<Grid xs={3} className="gridsline3"> City</Grid>
<Grid xs={3} className="gridsline3">State</Grid>
<Grid xs={3} className="gridsline3">Country</Grid>
<Grid xs={3} className="gridsline3"> </Grid>
</Grid>

<Grid container className="gridcontainer">
<Grid xs={3} className="gridsline2style">Bangalore</Grid>
<Grid xs={3} className="gridsline2style">Karnataka</Grid>
<Grid xs={3} className="gridsline2style">India</Grid>
<Grid xs={3} className="gridsline2style"></Grid>
</Grid>
</div>

    </div>
  );
};

export default About;
