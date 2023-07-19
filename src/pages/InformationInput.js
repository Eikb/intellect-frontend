import { Button, Container, Grid, Input, InputAdornment, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const InformationInput = () => {
    let {id} = useParams();
  return (
    <>
    <Container sx={{marginTop:"3vh"}}>
        <Typography fontWeight="bold" fontSize="30px">
            Kursinformationen
        </Typography>
        <Typography fontWeight="bold" fontSize="13px">
            Kursname: Test
        </Typography>
        <Typography fontWeight="bold" fontSize="13px">
            Kursdatum: Test
        </Typography>
        <Typography fontWeight="bold" fontSize="13px">
            Kursname: Test
        </Typography>
    <Grid container spacing={2}>
    <Grid item xs={12}>
        <TextField select id="filled-basic" label="Anrede" variant="filled"  sx={{width:"200px"}}>
        <MenuItem key={1} value={"Herr"}>
              Herr
            </MenuItem>
            <MenuItem key={2} value={"Frau"}>
              Frau
            </MenuItem>
        </TextField>
        </Grid>
        <Grid item xs={6}>
        <TextField id="filled-basic" label="Vorname" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={6}>
        <TextField id="filled-basic" label="Nachname" variant="filled" fullWidth/>
        </Grid>
        <Grid item xs={7}>
        <TextField id="filled-basic" label="Email-Adresse" variant="filled"  InputProps={{
            startAdornment: <InputAdornment position="start">@</InputAdornment>,
          }} fullWidth />
        </Grid>
        <Grid item xs={4}>
        <TextField id="filled-basic" label="Telefonnummer" variant="filled" InputProps={{
            startAdornment: <InputAdornment position="start">+</InputAdornment>,
          }} fullWidth/>
        </Grid>
        <Grid item xs={12}>
        <TextField label="Geburtsdatum" variant="filled" />
        </Grid>
        <Grid item xs={12}>
       <Button>Buchen</Button>
        </Grid>
      </Grid>
    </Container>
    
    </>
  );
};

export default InformationInput;
