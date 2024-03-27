import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

const logout = () => {
    navigate('/login');
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, password, confirmPassword } = formData;

    if (name.length < 7) {
      alert("Name must be greater than 6 characters.");
      return;
    }

    if (password.length < 7) {
      alert("Password must be greater than 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Form is valid, you can submit the form or perform other actions.
    alert("Registration successful!");
  };

  
  const cardStyle = {
    height: 410,
    width: 700,
    backgroundColor: 'white', // Orange to Red linear gradient
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: '0.9',
  };

  const formTextStyle = {
    color: 'black', // Set the font color to black
  };

  const mainPageStyle = {
    backgroundColor: '#808080', // Set the background color of the main page
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={mainPageStyle}>
      <Card style={cardStyle}>
        <CardContent>
          <form onSubmit={(e) => { e.preventDefault(); validateForm(); }}>
            <TextField
              label="Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{ style: formTextStyle }} // Apply custom styles for text color
            />

            <TextField
              label="Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{ style: formTextStyle }}
            />

            <TextField
              type="password"
              label="Password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{ style: formTextStyle }}
            />

            <TextField
              type="password"
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{ style: formTextStyle }}
            />

            <Button type="submit" variant="contained" color="primary" onClick={logout} fullWidth style={{ ...formTextStyle, marginTop: '15px' }}>
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
