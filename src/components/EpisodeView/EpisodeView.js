import React from 'react';
import { useContext } from "react";
import { PodcastsContext } from "../Contexts/PodcastContext";
import ReactPlayer from 'react-player';

const EpisodeView = () => {
  const { selectedEpisodes } = useContext(PodcastsContext);

  return (
    <div>
      <h2>{selectedEpisodes.title}</h2>
      <p>{selectedEpisodes.description}</p>
      <ReactPlayer
        url={selectedEpisodes.episodeUrl}
        controls
      />
    </div>
  );
};

export default EpisodeView;
