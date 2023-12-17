import "./homepage-style.css";
import Header from "../../common/header/header";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Sidebar from "../../common/sidebar/sidebar";
import Dashboard from "../dashbord/Dashboard";

const Homepage = () => {
  const theme = useTheme();
  return (
    <div className="screen">
      <Header />
      <div className="container">
        <Card className="main-container" sx={{ display: "flex"}}>
          <div className="sidebar-container">
          <Sidebar/>
          </div>
          <div className="dashbord-container">
          <Dashboard/>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Homepage;
