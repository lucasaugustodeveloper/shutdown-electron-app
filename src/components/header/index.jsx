import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 1rem 0;

  background: #333;
  color: #fff;

  .header__logo {
    display: flex;
    justify-content: center;
    width: 20%;

    img {
      display: block;
      width: 85px;
      height: 85x;
    }
  }

  .header__title {
    font-family: 'PT Sans', sans-serif;
    text-align: center;

    width: 80%;

    h1 {
      font-size: 2rem;
    }
  }
`;

function AppHeader() {
  return (
    <Header className='header'>
      <div className='header__logo'>
        <img src='assets/images/logo512.png' alt='shutdown system' />
      </div>

      <div className='header__title'>
        <h1>Shutdown System</h1>
      </div>
    </Header>
  );
}

export default AppHeader;
