import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { FaUtensils, FaClock, FaUsers, FaLanguage, FaPhone } from 'react-icons/fa';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    maxWidth: 920,
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    width: 150,
    height: 150,
  },
  icon: {
    fontSize: 40,
    marginRight: 10,
    color: '#FFAE42',
  },
  toolbar: {
    flexDirection: 'row', // Change flex direction to row
    alignItems: 'center', // Align items to the center of the row
  },
  typography: {
    fontSize: '14px', // Set the font size to 20px
    fontWeight: 2, // Set the font weight to 2
    color: 'black', // Set the font color to black
  },
};

const MyCard = () => {
  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Toolbar style={styles.toolbar}>
          <CardContent style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <FaUtensils style={styles.icon} />
            <Typography variant="body2" color="textSecondary" style={styles.typography}>
              Food
            </Typography>
          </CardContent>
          <CardContent style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <FaClock style={styles.icon} />
            <Typography variant="body2" color="textSecondary" style={styles.typography}>
              2 nights / 1 day
            </Typography>
          </CardContent>
          <CardContent style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <FaUsers style={styles.icon} />
            <Typography variant="body2" color="textSecondary" style={styles.typography}>
              10 Members
            </Typography>
          </CardContent>
          <CardContent style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <FaLanguage style={styles.icon} />
            <Typography variant="body2" color="textSecondary" style={styles.typography}>
              English / Tamil
            </Typography>
          </CardContent>
          <CardContent style={{ display: 'flex', alignItems: 'center' }}>
            <FaPhone style={styles.icon} />
            <Typography variant="body2" color="textSecondary" style={styles.typography}>
              9876543211
            </Typography>
          </CardContent>
        </Toolbar>
      </Card>
    </div>
  );
};

export default MyCard;
