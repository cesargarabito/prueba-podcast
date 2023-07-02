import React from "react";
import { useContext } from "react";
import { PodcastsContext } from "../Contexts/PodcastContext";
import { useState, useEffect } from "react";

import "./EpisodeView.css";

const EpisodeView = () => {
  const { selectedEpisodes } = useContext(PodcastsContext);
  const [localEpisode, setLocalEpisode] = useState({});

  useEffect(() => {
    
    if (Object.keys(selectedEpisodes).length) {
      localStorage.setItem(
        "selectedEpisodes",
        JSON.stringify(selectedEpisodes)
      );
    }
  }, [selectedEpisodes]);

  useEffect(() => {
    
    const storedSelectedEpisodes = localStorage.getItem("selectedEpisodes");

    if (storedSelectedEpisodes) {
      setLocalEpisode(JSON.parse(storedSelectedEpisodes));
    }
  }, []);

  return (
    <div className="episode-container">
      <h2 className="episode-title">{selectedEpisodes.title || localEpisode.title}</h2>
      <p className="episode-description">{selectedEpisodes.description || localEpisode.description}</p>
      <audio controls style={{ width: '100%'}}>
        <source src={selectedEpisodes.episodeUrl || localEpisode.episodeUrl} type="audio/mpeg" />
        Tu navegador no admite la reproducción de audio.
      </audio>
    </div>
  );
};

export default EpisodeView;
