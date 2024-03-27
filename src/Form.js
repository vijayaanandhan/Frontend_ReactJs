import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const VacationDetailsForm = () => {
  const [vacationType, setVacationType] = useState('');
  const [dateOfTravel, setDateOfTravel] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [customization, setCustomization] = useState('');

  const navigate = useNavigate();

const logout = () => {
    navigate('/payment');
};

  const handleVacationTypeChange = (event) => {
    setVacationType(event.target.value);
  };

  const handleDateOfTravelChange = (event) => {
    setDateOfTravel(event.target.value);
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const handleCustomizationChange = (event) => {
    setCustomization(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Handle the collected details, you can replace this with your logic
    console.log('Vacation Type:', vacationType);
    console.log('Date of Travel:', dateOfTravel);
    console.log('Number of People:', numberOfPeople);
    console.log('Customization:', customization);
  };

  const formStyles = {
    width: '60%', // Set the width of the form to 60%
    margin: '30px auto 0', // Center the form horizontally and add 30px margin on top
    textAlign: 'center', // Center align text within the form
  };

  const inputStyles = {
    marginBottom: '20px', // Add space between input fields
  };

  const buttonStyles = {
    marginTop: '20px', // Add space above the submit button
  };

  return (
    <Card style={formStyles}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Vacation Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Type of Vacation"
            variant="outlined"
            fullWidth
            margin="normal"
            style={inputStyles}
            value={vacationType}
            onChange={handleVacationTypeChange}
          />
          <TextField
            label="Date of Travel"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            style={inputStyles}
            InputLabelProps={{
              shrink: true,
            }}
            value={dateOfTravel}
            onChange={handleDateOfTravelChange}
          />
          <TextField
            label="Number of People"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            style={inputStyles}
            value={numberOfPeople}
            onChange={handleNumberOfPeopleChange}
          />
          <TextField
            label="Customization"
            variant="outlined"
            fullWidth
            margin="normal"
            style={inputStyles}
            value={customization}
            onChange={handleCustomizationChange}
          />
          <Button type="submit" variant="contained" color="primary" style={buttonStyles} onClick={logout}>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default VacationDetailsForm;
