import { Button, Container, Input, TextField, Typography } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <Container style={{ width: "80vw", marginTop: "8vh" }}>
        <Typography fontWeight="bold" fontSize="30px" marginBottom="3vh">
          Kontaktieren Sie Uns
        </Typography>
        <Typography fontWeight="light" fontSize="20px">
          Sie haben Fragen? Möchten mit uns Kontakt aufnehmen? Für alle Fragen,
          Anregungen und Wünsche stehen wir Ihnen gerne jederzeit zur Verfügung.
          Nutzen Sie einen der untenstehenden Möglichkeiten, um uns zu
          kontaktieren oder verwenden Sie unser Kontaktformular.
        </Typography>
        <div style={{ marginTop: "6vh" }}>
          <TextField
            id="outlined-basic"
            label="Vor- und Nachname"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            style={{ marginTop: "2vh" }}
          />
          <TextField
            label="Nachricht"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            style={{ marginTop: "2vh" }}
          />
          <Button
            style={{
              background: "rgb(225 159 37)",
              color: "white",
              marginTop: "5vh",
            }}
            fullWidth
          >
            Abschicken
          </Button>
        </div>
        <Typography fontSize="30px" fontWeight="bold" marginTop="10%">
          Intellect Stapler
        </Typography>
        <Typography fontSize="20px">Sterkenhofweg 32</Typography>
        <Typography fontSize="20px">47807 Krefeld </Typography>
        <Typography fontSize="20px" marginTop="5%">
          Inhaber: M.Emin Yildiz
        </Typography>
        <Typography fontSize="20px" marginTop="5%">
          Tel: 0172 75 99 287{" "}
        </Typography>
        <Typography fontSize="20px">
        emin.yildiz@intellect-stapler.de
        </Typography>
        <Typography fontSize="20px">
        www.intellect-stapler.de
        </Typography>
      </Container>

    </div>
  );
}
