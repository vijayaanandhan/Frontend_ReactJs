import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const styles = {
  card: {
    maxWidth: '90%', // Set to 100% of the screen width
    margin: '20px',
    marginLeft:'75px', 
  },
  media: {
    height: 500,
  },
  description: {
    fontFamily: 'serif', // Set the font family to serif
    fontSize: '20px', // Set the font size to 10px
  },
};

const OotyCard = () => {
  return (
    <Card style={styles.card}>
      <CardMedia
        component="img"
        alt="Ooty"
        height="20"
        image="https://images.unsplash.com/photo-1583700295619-04893ffa2741?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Replace with the actual image URL
        style={styles.media}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom style={{ fontFamily: 'cursive' }}>
          Ooty - Queen of Hills
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ ...styles.description }}>
          Nestled in the Nilgiri Hills, Ooty is a picturesque hill station known for its lush greenery, serene lakes, and pleasant climate. The rolling hills, tea gardens, and the iconic Nilgiri Mountain Railway add to the charm of this beautiful destination.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OotyCard;
