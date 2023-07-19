import React from "react";
import { Typography } from "@mui/material";
import "./IconSection.css"

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
const IconSection = () => {
  return (
    <div className="section" style={{ display: "flex", justifyContent: "space-between", marginTop:"6%", marginBottom:"10%"}}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginLeft:"3%" }}>
        <AccessTimeFilledIcon style={{fontSize:"600%",  color:"rgb(151 202 224)", marginBottom:"4%" }}/>
        <Typography className="beschreibung" fontSize="20px" fontWeight="bold" color="rgb(225 159 37)">Karriereboost mit einer Staplerausbildung: Berufliche Möglichkeiten erweitern!</Typography>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginLeft:"3%" }}>
        <AccessTimeFilledIcon style={{fontSize:"120px",  color:"rgb(151 202 224)", marginBottom:"4%" }}/>
        <Typography className="beschreibung"  fontSize="20px" fontWeight="bold" color="rgb(225 159 37)">Sicherheit am Arbeitsplatz stärken: Staplerausbildung macht den Unterschied!</Typography>
      </div>
      <div className="beschreibung" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginLeft:"3%", marginRight:"3%" }}>
        <AccessTimeFilledIcon style={{fontSize:"120px",  color:"rgb(151 202 224)", marginBottom:"4%" }}/>
        <Typography  className="beschreibung" fontSize="20px" fontWeight="bold" color="rgb(225 159 37)">Vielseitig einsetzbar: Staplerkenntnisse für verschiedene Branchen!</Typography>
      </div>
    </div>
  );
};

export default IconSection;
