import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import "./SsideBar.css";
interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {


  return (
    <>
      <Grid
        item
        md={2.5}
        sm={4}
        className="sidebar__container"
        sx={{
          display: { sm: "none", xs: "none", md: "block" },
        }}
      >
        {/* LOGO */}
       
        
      </Grid>
    </>
  );
};

export default SideBar;
