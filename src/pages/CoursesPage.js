import React, { useState } from 'react';
import Course from '../components/Course';
import { Box, Button, Modal, Typography } from '@mui/material';
const availableCourses = [
  {
    id: 1,
    name: 'Gabelstaplerkurs A',
    date: '01.10.2023',
    availableSeats: 10,
    occupiedSeats: 5,
  },
  {
    id: 2,
    name: 'Gabelstaplerkurs B',
    date: '15.10.2023',
    availableSeats: 15,
    occupiedSeats: 8,
  },
  {
    id: 3,
    name: 'Gabelstaplerkurs C',
    date: '30.10.2023',
    availableSeats: 20,
    occupiedSeats: 12,
  },
];



const CoursePage = () => {


  return (<>
     
       
    <div className="container" >
    <h1 >Verfügbare Kurse</h1>
  </div>
    <div style={{marginLeft:"3vw", marginRight:"3vw"}}>

      <h1>Verfügbare Kurse</h1>
      {availableCourses.map((course) => (
        <>
        <Course
          key={course.id}
          name={course.name}
          date={course.date}
          availableSeats={course.availableSeats}
          occupiedSeats={course.occupiedSeats}
        />
        </>
      ))}
    </div>
    </>
  );
};

export default CoursePage;
