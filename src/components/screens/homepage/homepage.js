import "./homepage-style.css";
import Header from "../../common/header/header";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Sidebar from "../../common/sidebar/sidebar";
import Navigation from "../../common/Navigationbar/Navigation";
// import DataTable from "../../common/Dashboard/DataTable";



const Homepage = () => {
  const theme = useTheme();
  return (
    <div className="screen">
      <Header />
      <div className="container">
        <Card sx={{ display: "flex" }}>
          <Sidebar/>
          <Navigation/>
          {/* <DataTable/> */}
        
          <div className="dashbord-container"></div>
        </Card>
      </div>
    </div>
  );
};
export default Homepage;
