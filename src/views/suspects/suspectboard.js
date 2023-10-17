/* eslint-disable no-unused-vars */
import React from 'react';
import Typography from '@mui/material/Typography';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import BoardItem from './boardItem';
import Container from '@mui/material/Container';

const SuspectBoard = ({ isLoading }) => {
  return (
    <div
      style={{
        backgroundImage: './waLLP.jpg', // Replace with your detective board image URL
        backgroundSize: 'cover', // Adjust to 'contain' or other values as needed
        backgroundRepeat: 'no-repeat',
        color: 'white', // Text color for the card
        minHeight: '100%' // Ensure the background covers the entire card
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: gridSpacing,
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent background
        }}
      >
        <Typography variant="subtitle2" sx={{ color: 'white' }}>
          Board
        </Typography>
        <BoardItem image="https://www.fbi.gov/wanted/cyber/behzad-mohammadzadeh/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/cyber/behzad-mohammadzadeh/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/cyber/behzad-mohammadzadeh/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/cyber/behzad-mohammadzadeh/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/cyber/behzad-mohammadzadeh/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/cyber/behzad-mohammadzadeh/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/cyber/behzad-mohammadzadeh/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/cyber/behzad-mohammadzadeh/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/cyber/behzad-mohammadzadeh/@@images/image/preview" />
        {/* Add more BoardItem components with different images as needed */}
      </Container>
    </div>
  );
};

export default SuspectBoard;
