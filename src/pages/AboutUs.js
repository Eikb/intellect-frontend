import React from "react";
import "./aboutus.css";
import { Avatar, Button, Typography } from "@mui/material";
import Course from "../components/Course";

const AboutUs = () => {
  return (
    <>
      <div className="container-aboutus">
        <h1>Über Uns</h1>
      </div>
      <div
      className="container-aboutus-text"
        style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth:"100%",
          position:"absolute",
          marginLeft:"10%",
          marginRight:"10%",
          marginTop:"3%"
        }}
      >
        <Typography fontSize="25px" fontWeight="bold" marginTop="2%">
          Willkommen bei Intellect Stapler!
        </Typography>
        <Typography fontSize="18px" marginTop="2%">
          Mit meiner langjährigen Arbeitserfahrung und als IHK geprüfter
          Ausbilder möchte ich mein Wissen im Bereich Gabelstapler- und
          Kranfahrer weitergeben.
        </Typography>

        <Typography fontSize="18px" marginTop="2%">
          Mein Ziel ist es, angehenden Fachkräften die notwendigen Fähigkeiten
          und Kenntnisse zu vermitteln, um sicher und effizient mit
          Gabelstaplern und Kranen umgehen zu können. Ich glaube an die
          Bedeutung einer fundierten Ausbildung, um die Sicherheit am
          Arbeitsplatz zu gewährleisten und gleichzeitig die Produktivität zu
          steigern.
        </Typography>
        <Typography fontSize="18px" marginTop="2%">
          Ich verstehe die Anforderungen und Herausforderungen dieser Tätigkeit
          und bestrebe, praxisorientierte Schulungen anzubieten, die auf die
          Bedürfnisse der Teilnehmer zugeschnitten sind.
        </Typography>
        <Typography fontSize="18px" marginTop="2%">
          Bei Intellect Stapler legen wir großen Wert auf eine interaktive
          Lernumgebung. In unserer Schulung kombinieren wir theoretisches Wissen
          mit praktischen Übungen, um den Teilnehmern eine umfassende Ausbildung
          anzubieten.
        </Typography>
        <Typography fontSize="18px" marginTop="2%">
          Unsere Ausbildung geht über die technischen Fähigkeiten hinaus und
          beinhaltet auch Aspekte wie Kommunikation, Teamarbeit und
          Verantwortungsbewusstsein. Wenn Sie Interesse an unseren Schulungen
          haben oder weitere Informationen benötigen, zögern Sie nicht, uns zu
          kontaktieren.
        </Typography>
        <Typography fontSize="18px" marginTop="4%">
          Intellect Stapler
        </Typography>
        <Typography fontSize="18px" fontWeight="bold">
          M. Emin Yildiz
        </Typography>
        <Typography fontSize="18px">IHK geprüfter Ausbilder </Typography>
      </div>
    </>
  );
};

export default AboutUs;
