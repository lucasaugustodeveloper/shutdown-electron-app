import React from 'react';
import { Grid } from '@material-ui/core';

import Header from '@components/molecules/header';
import Actions from '@components/organisms/actions';
import Input from '@components/atoms/input';

import './style.css';

function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={6}>
            <Actions title='Triggers'>
              In
              <Input
                type='number'
                name='trigger'
                placeholder='30'
                min={1}
                step={1}
              />
              minutos from now
            </Actions>
            <Actions title='Actions'>
              Select Action:
              <select>
                <option disabled selected>
                  Selecione um Opção
                </option>
                <option>Shutdown</option>
                <option>Reboot</option>
                <option>Sleep</option>
              </select>
            </Actions>
          </Grid>
          <Grid item xs={6}>
            Options
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
