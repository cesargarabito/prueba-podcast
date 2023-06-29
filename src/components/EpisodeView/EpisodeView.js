import React from 'react';
import { useContext } from "react";
import { PodcastsContext } from "../Contexts/PodcastContext";
import ReactPlayer from 'react-player';
import './EpisodeView.css';

const EpisodeView = () => {
  const { selectedEpisodes } = useContext(PodcastsContext);

  return (
    <div className="episode-container">
      <h2 className="episode-title">{selectedEpisodes.title}</h2>
      <p className="episode-description">{selectedEpisodes.description}</p>
      <div className="react-player-wrapper">
        <ReactPlayer
          url={selectedEpisodes.episodeUrl}
          controls
          
        />
      </div>
    </div>
  );
};

export default EpisodeView;

