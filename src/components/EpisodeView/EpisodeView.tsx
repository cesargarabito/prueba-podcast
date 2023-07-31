import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./EpisodeView.css";
import { PodcastsState } from "../../store/reducers";
import { SelectedEpisodes } from "../../store/actionTypes";

const EpisodeView = () => {
  const selectedEpisode = useSelector<PodcastsState>(
    (state) => state.selectedEpisodes
  ) as SelectedEpisodes;
  const [localEpisode, setLocalEpisode] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    if (Object.keys(selectedEpisode).length && selectedEpisode.id !== 0) {
      localStorage.setItem("selectedEpisode", JSON.stringify(selectedEpisode));
    }
  }, [selectedEpisode]);

  useEffect(() => {
    const storedSelectedEpisodes = localStorage.getItem("selectedEpisode");

    if (storedSelectedEpisodes) {
      setLocalEpisode(JSON.parse(storedSelectedEpisodes));
    }
  }, []);

  return (
    <div className="episode-container">
      <h2 className="episode-title">
        {selectedEpisode.title || localEpisode.title}
      </h2>
      <p className="episode-description">
        {selectedEpisode.description || localEpisode.description}
      </p>
      <audio controls style={{ width: "100%" }}>
        <source
          src={selectedEpisode.episodeUrl || localEpisode.episodeUrl}
          type="audio/mpeg"
        />
        Tu navegador no admite la reproducción de audio.
      </audio>
    </div>
  );
};

export default EpisodeView;
