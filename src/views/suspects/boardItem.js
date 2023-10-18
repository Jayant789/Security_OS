import React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const RootPaper = styled(Paper)`
  position: relative;
  padding: 15px;
  margin: 10px;
  background: #f0f0f0;
  width: 250px;
  height: 350px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;

  .img {
    width: 100%;
    height: auto;
    border-radius: 5px 5px 0 0;
  }

  .overlay {
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

const BoardItem = ({ image }) => {
  return (
    <RootPaper elevation={3}>
      <img className="img" src={image} alt="profile" />
      <div className="overlay">Wanted</div>
      <Typography variant="body2" color="textSecondary" component="p">
        YULAN ADONAY ARCHAGA CARIAS
      </Typography>
    </RootPaper>
  );
};

export default BoardItem;
