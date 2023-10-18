import React from 'react';
import './DetectivesBoard.css';
import BoardItem from './boardItem';
import MainCard from 'ui-component/cards/MainCard';
import styled from '@emotion/styled';
//import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { brown } from '@mui/material/colors';

const RootPaper = styled(Paper)`
  position: relative;
  padding: 15px;
  margin: 10px;
  background: #fffff0;
  width: 90%;
  height: 80%;
  variant: outlined;
  border-radius: 5px;
  border: 25px solid ${brown[100]};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SuspectsBoard = () => {
  return (
    <MainCard>
      <RootPaper elevation={5}>
        <BoardItem image="https://www.fbi.gov/wanted/topten/yulan-adonay-archaga-carias/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/topten/yulan-adonay-archaga-carias/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/topten/yulan-adonay-archaga-carias/@@images/image/preview" />
        <BoardItem image="https://www.fbi.gov/wanted/topten/yulan-adonay-archaga-carias/@@images/image/preview" />
      </RootPaper>
    </MainCard>
  );
};

export default SuspectsBoard;
