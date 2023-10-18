import React from 'react';
import './DetectivesBoard.css';
import BoardItem from './boardItem';
import MainCard from 'ui-component/cards/MainCard';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { brown } from '@mui/material/colors';

const RootPaper = styled(Paper)`
  position: relative;
  padding: 15px;
  margin: 10px;
  background: url('https://media.istockphoto.com/id/1388032818/photo/paper-texture-cardboard-background-close-up-grunge-paper-texture.jpg?s=2048x2048&w=is&k=20&c=xWxSv8-TJ5qdStfyzxPxtSrXK9bztr2xK_4UnEtbrMw='); /* Replace with your image URL */
  background-size: cover;
  width: 90%;
  height: 80%;
  variant: outlined;
  border-radius: 5px;
  border: 25px solid ${brown[700]};
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.9);
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Create 3 equal-width columns
  gap: 10px;
`;

const SuspectsBoard = () => {
  return (
    <MainCard>
      <Typography variant="h5">Suspects Board</Typography>
      <RootPaper elevation={50}>
        <BoardItem image="https://www.fbi.gov/wanted/topten/yulan-adonay-archaga-carias/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/topten/wilver-villegas-palomino/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/topten/omar-alexander-cardenas/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/topten/donald-eugene-fields-ii/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/topten/bhadreshkumar-chetanbhai-patel/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/topten/ruja-ignatova/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/topten/alexis-flores/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/topten/yulan-adonay-archaga-carias/@@images/image/preview" />
      </RootPaper>
    </MainCard>
  );
};

export default SuspectsBoard;
