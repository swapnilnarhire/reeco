import { AppBar, Breadcrumbs, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function handleClick(event) {
  event.preventDefault();
}

const FeatureHeader = (props) => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Order
    </Link>,
    <Typography key="3" color="text.primary">
      Order 32457abc
    </Typography>,
  ];

  return (
    <AppBar position="static" color="transparent" sx={{p:2}}>
      {" "}
     
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Typography variant="h5" color="inherit" noWrap mt={1}>
          <strong> Order 32457abc</strong>
        </Typography>
      
    </AppBar>
  );
};

export default FeatureHeader;
