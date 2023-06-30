import React from "react";
import { useContext } from "react";
import { PodcastsContext } from "../Contexts/PodcastContext";

import "./EpisodeView.css";

const EpisodeView = () => {
  const { selectedEpisodes } = useContext(PodcastsContext);

  return (
    <div className="episode-container">
      <h2 className="episode-title">{selectedEpisodes.title}</h2>
      <p className="episode-description">{selectedEpisodes.description || 'No description available'}</p>
      <audio controls>
        <source src={selectedEpisodes.episodeUrl} type="audio/mpeg" />
        Tu navegador no admite la reproducción de audio.
      </audio>
    </div>
  );
};

export default EpisodeView;
