import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import Content from '@components/atoms/content';

const Title = styled.span`
  font-family: 'PT Sans', sans-serif;
  font-size: 2rem;

  span {
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.5rem;

    color: #f00;
  }
`;

function Actions({ title, children, className }) {
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12}>
          <Title>
            Step: <span>{title}</span>
          </Title>
        </Grid>
      </Grid>

      <Content>{children}</Content>
    </Grid>
  );
}

export default Actions;
