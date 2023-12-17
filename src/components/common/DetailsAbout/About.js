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
<Grid container className="gridcontainer">
<Grid xs={3} className="grids">Client Id</Grid>
<Grid xs={3} className="grids">gvhjgvjh</Grid>
<Grid xs={3} className="grids">gvhjgvjh</Grid>
<Grid xs={3} className="grids">gvhjgvjh</Grid>
</Grid>

    </div>
  );
};

export default About;
