import "./homepage-style.css";
import Header from "../../common/header/header";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Sidebar from "../../common/sidebar/sidebar";


const Homepage = () => {
  const theme = useTheme();
  return (
    <div className="screen">
      <Header />
      <div className="container">
        <Card sx={{ display: "flex" }}>
          <Sidebar/>
          <div className="dashbord-container"></div>
        </Card>
      </div>
    </div>
  );
};
export default Homepage;
