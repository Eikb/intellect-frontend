import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Course = ({ name, date, availableSeats, occupiedSeats }) => {
  const handleBooking = () => {
    // Hier kann die Logik für die Buchung des Kurses implementiert werden
   navigate("/buchen/1")
  };

  const navigate = useNavigate();
  return (
    <>
 
    <Box sx={{ border: '1px solid #ccc', borderRadius: '4px', padding: '1rem', marginBottom: '1rem' }}>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="subtitle1">Datum: {date}</Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="body1">Verfügbare Plätze: {availableSeats}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">Belegte Plätze: {occupiedSeats}</Typography>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={handleBooking}>
        Buchen
      </Button>
    </Box>
    </>

  );
};

export default Course;
