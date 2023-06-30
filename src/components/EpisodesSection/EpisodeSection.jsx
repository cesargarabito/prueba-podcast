import React from "react";
import { useContext } from "react";
import { PodcastsContext } from "../Contexts/PodcastContext";
import { useNavigate } from "react-router-dom";

const EpisodeSection = ({ episodes }) => {
  const navigate = useNavigate();
  const { setSelectedEpisodes } = useContext(PodcastsContext);
  const handleSelectedEpisode = (selectedEpisode) => {
    setSelectedEpisodes(selectedEpisode);
    navigate(
      `/podcast/${selectedEpisode.podcastId}/episode/${selectedEpisode.id}`
    );
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  const formatDuration = (durationInMillis) => {
    const totalSeconds = Math.floor(durationInMillis / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div style={{ textAlign: "left" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>Episodios: </h2>
        <div
          style={{
            backgroundColor: "navy",
            color: "white",
            borderRadius: "4px",
            padding: "8px",
          }}
        >
          {episodes.length}
        </div>
      </div>
      <div>
        <table style={{ borderCollapse: "collapse", overflowX: "auto" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th style={{ marginRight: "20px" }}>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor:
                    index % 2 === 0 ? "rgba(128, 128, 128, 0.2)" : "white",
                }}
              >
                <td
                  onClick={() => {
                    handleSelectedEpisode({
                      podcastId: episode.collectionId,
                      id: episode.trackId,
                      title: episode.trackName,
                      description: episode.description,
                      episodeUrl: episode.episodeUrl
                    });
                  }}
                  style={{ color: "navy", cursor: 'pointer' }}
                >
                  {episode.trackName}
                </td>
                <td style={{ marginRight: "20px" }}>
                  {formatDate(episode.releaseDate)}
                </td>
                <td>{formatDuration(episode.trackTimeMillis)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EpisodeSection;
