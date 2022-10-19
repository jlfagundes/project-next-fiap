import styled from '@emotion/styled';
import React from 'react';
import ExtractData from '../ExtractData';
import ExtractHeader from '../ExtractHeader';
import ExtractTotal from '../ExtractTotal';
import db from '../utils/db';   

const ExtractContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;


export default function ExtractContent() {
  return (
    <ExtractContentContainer>
        <ExtractHeader />
        <ExtractTotal />
        <ExtractData db={db} />
        <ExtractTotal />
    </ExtractContentContainer>
  );
};
