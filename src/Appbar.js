import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#FFAE42', // Set the background color to orange
    color: 'black', // Set the font color to black
  },
  title: {
    fontWeight: 'bold', // Set the font weight to bold
  },
  avatar: {
    cursor: 'pointer',
    color: 'black', // Set the color of the avatar to black
  },
  popover: {
    padding: '10px',
  },
};

const AppToolbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <header>
      <AppBar position="static">
        <Toolbar style={styles.toolbar}>
          <Typography variant="h6" component="div" style={styles.title}>
            UXplore
          </Typography>
          <IconButton style={styles.avatar} onClick={handleProfileClick}>
            <Avatar alt="Profile" src="https://cdn.imgbin.com/3/5/9/imgbin-computer-icons-user-profile-user-account-avatar-TfT3FkAEbgD76My1GynmW5KzT.jpg" />
          </IconButton>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box style={styles.popover}>
              <Typography>John Doe</Typography>
              <Typography>Email: john.doe@example.com</Typography>
            </Box>
          </Popover>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default AppToolbar;
