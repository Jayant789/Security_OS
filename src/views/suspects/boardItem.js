import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import thumbPinImage from './pin2-removebg-preview.png';

const getRandomRotation = () => {
  // Generate a random angle between -5 and 5 degrees
  return `rotate(${Math.random() * 10 - 5}deg)`;
};

const BoardItem = ({ image }) => {
  const rotation = getRandomRotation();

  const rootStyle = {
    position: 'relative',
    padding: '15px',
    margin: '10px',
    background: '#f0f0f0',
    width: '200px',
    height: '300px',
    borderRadius: '5px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transform: rotation
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px 5px 0 0'
  };

  const overlayStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.5)',
    padding: '5px 10px',
    borderRadius: '5px'
  };

  const pinStyle = {
    position: 'absolute',
    top: '-20px',
    left: '50%',
    transform: 'translateX(-50%) rotate(-45deg)',
    width: '50px',
    height: '50px',
    background: `url(${thumbPinImage})`, // Replace 'path-to-your-thumb-pin-image.png' with the actual path to your image
    backgroundSize: 'cover'
  };

  return (
    <Paper elevation={3} style={rootStyle}>
      <div style={pinStyle}></div>
      <img style={imgStyle} src={image} alt="profile" />
      <div style={overlayStyle}>Wanted</div>
      <Typography variant="body2" color="textSecondary" component="p">
        YULAN ADONAY ARCHAGA CARIAS
      </Typography>
    </Paper>
  );
};

export default BoardItem;
