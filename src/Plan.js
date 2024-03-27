import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const TravelPlan = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [showImage, setShowImage] = useState(true);

  const travelPlans = [
    {
      day: 1,
      plan: 'Explore the city and try local cuisine.',
      image: 'https://images.unsplash.com/photo-1563459802257-2a97df940f11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b290eXxlbnwwfHwwfHx8MA%3D%3D',
      color: '#FF6347', // Day 1 color (Tomato)
    },
    {
      day: 2,
      plan: 'Visit a nature reserve, enjoy adventure activities, and watch the sunset.',
      image: 'https://images.unsplash.com/photo-1554995329-c1561a77679f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b290eXxlbnwwfHwwfHx8MA%3D%3D',
      color: '#66CDAA', // Day 2 color (MediumAquamarine)
    },
    {
      day: 3,
      plan: 'Discover cultural sites, have a leisure day, and enjoy a farewell dinner.',
      image: 'https://media.istockphoto.com/id/92007526/photo/ooty-indian-city.jpg?s=612x612&w=0&k=20&c=2s8Hn1AAC71g8TkVN1bzTHhO_04AbD2H9oz6ZU8j46I=',
      color: '#9370DB', // Day 3 color (MediumPurple)
    },
  ];

  const handleButtonClick = (day) => {
    setSelectedDay(day);
    setShowImage(true); // Always show the image when a button is clicked
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        {travelPlans.map((plan) => (
          <React.Fragment key={plan.day}>
            <Button
              variant="contained"
              style={{ backgroundColor: plan.color, fontSize: '20px', fontWeight: 'bold' }}
              onClick={() => handleButtonClick(plan.day)}
            >
              Day {plan.day}
            </Button>
            <span style={{ margin: '0 10px' }}></span>
          </React.Fragment>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: travelPlans[selectedDay - 1].color, fontSize: '20px' }}>
          Daysnp {selectedDay} Plan:
        </h2>
        <p style={{ fontSize: '20px' }}>{travelPlans[selectedDay - 1].plan}</p>

        {showImage && (
          <Card>
            <CardMedia
              component="img"
              alt={`Day ${selectedDay} Image`}
              style={{ height: '150px', width: '200px', objectFit: 'cover' }}
              image={travelPlans[selectedDay - 1].image}
            />
          </Card>
        )}
      </div>
    </div>
  );
};

export default TravelPlan;


