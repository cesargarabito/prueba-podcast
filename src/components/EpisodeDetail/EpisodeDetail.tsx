import React from 'react';
import { Grid } from '@mui/material';
import SideBar from '../SideBar/SideBar';
import EpisodeView from '../EpisodeView/EpisodeView';
import Header from '../Header';


const EpisodeDetail = () => {
  return (
    <div >
      <Header />
    <div style={{ marginLeft: '2rem', marginRight: '2rem'}}>
      <Grid container spacing={2} >
        <Grid item xs={12} md={4}>
          <SideBar />
        </Grid>
        <Grid item xs={12} md={8}>
          <EpisodeView />
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default EpisodeDetail;
