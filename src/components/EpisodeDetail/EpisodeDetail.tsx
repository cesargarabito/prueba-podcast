import React from 'react';
import SideBar from '../SideBar/SideBar';
import EpisodeView from '../EpisodeView/EpisodeView';
import Header from '../Header';
import './EpisodeDetail.css';

const EpisodeDetail = () => {
  return (
    <div>
        <Header />
    <div className="episode-detail-container">
      
      <div className="episode-detail-content">
        <SideBar />
        <EpisodeView />
      </div>
    </div>
    </div>
  );
}

export default EpisodeDetail;
