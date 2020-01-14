import React from 'react';
import styled from 'styled-components';

import Header from '@components/header';

import './style.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function Home() {
  return (
    <Container className='container'>
      <Header />
      <div className='Home'>Shutdown Windows</div>
    </Container>
  );
}

export default Home;
