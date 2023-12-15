

import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const Navbar = () => {
  return (
    <Grid container sx={{ background: "gray", p: 1 }}>
      <Grid item xs={12} md={3} sx={{ display: "flex" }}>
      <Avatar alt="Remy Sharp" src="images/img1.jpg" />
        <Grid sx={{ ml: 1 }}>
          <Typography sx={{color:'#9aaec0'}}>Partner code : IA234522</Typography>
          <Typography sx={{color:'#9aaec0'}}>Partner code : IA234522</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: "flex" }}>
        <div
          style={{
            height: "50px",
            width: "50px",
            background: "white",
            borderRadius: "50%",
            textAlign: "center",
            padding: "5px",
          }}
        >
         <img src="images/backarrow.jpg"/>
        </div>
        <Grid>
          <Grid sx={{ ml: 2, mt: 1.5 }}>
            <input
              style={{ height: "40px", width: "210px" }}
              type="search"
            ></input>
            <Button
              variant="outlined"
              sx={{ backgroundColor: "blue", color: "white", ml:2 }}
              //    startIcon={<DeleteIcon />}
            >
              +Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3} sx={{ display: "flex" }}>
        <div
          style={{
            height: "30px",
            width: "30px",
            background: "white",
            borderRadius: "10px",
            textAlign: "center",
            padding: "5px",
          }}
        >
          arr
        </div>
        <div
          style={{
            height: "30px",
            width: "30px",
            background: "white",
            borderRadius: "10px",
            textAlign: "center",
            padding: "5px",
          }}
        >
          arr
        </div>
        <div
          style={{
            height: "30px",
            width: "30px",
            background: "white",
            borderRadius: "10px",
            textAlign: "center",
            padding: "5px",
          }}
        >
          arr
        </div>
      </Grid>
    </Grid>
  );
};

export default Navbar;