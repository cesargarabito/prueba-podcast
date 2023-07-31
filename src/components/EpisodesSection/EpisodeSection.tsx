
import { useNavigate } from "react-router-dom";
import "./EpisodeSection.css";
import { PodcastsActionTypes } from "../../store/actionTypes";
import { useDispatch } from "react-redux";

interface SelectedEpisode {
  id: number;
  podcastId: number;
  title: string;
  description: string;
  episodeUrl: string;
}

const EpisodeSection = ({ episodes }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleSelectedEpisode = (selectedEpisode: SelectedEpisode) => {
    
    dispatch({ type: PodcastsActionTypes.SET_SELECTED_EPISODES, payload: selectedEpisode });
    navigate(
      `/podcast/${selectedEpisode.podcastId}/episode/${selectedEpisode.id}`
    );
  };
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  const formatDuration = (durationInMillis: number) => {
    const totalSeconds = Math.floor(durationInMillis / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div style={{ gap: "5px" }}>
      <div className="upper-episode">
        <h2 style={{ margin: '0px'}}>Episodios: </h2>
        <div
          style={{
            backgroundColor: "navy",
            color: "white",
            borderRadius: "4px",
            padding: "8px",
            height: "100%",
          }}
        >
          {episodes.length}
        </div>
      </div>
      <div style={{ textAlign: "left" }} className="card-episode-section">
        <div>
          <table
            style={{
              borderCollapse: "collapse",
              overflowX: "auto",
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th style={{ padding: "16px" }}>Title</th>
                <th style={{ padding: "16px" }}>Date</th>
                <th style={{ padding: "16px" }}>Duration</th>
              </tr>
            </thead>
            <tbody>
              {episodes.map((episode: any, index: number) => (
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
                        episodeUrl: episode.episodeUrl,
                      });
                    }}
                    style={{
                      color: "navy",
                      cursor: "pointer",
                      padding: "16px",
                    }}
                  >
                    {episode.trackName}
                  </td>
                  <td style={{ padding: "16px" }}>
                    {formatDate(episode.releaseDate)}
                  </td>
                  <td style={{ padding: "16px" }}>
                    {formatDuration(episode.trackTimeMillis)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EpisodeSection;
