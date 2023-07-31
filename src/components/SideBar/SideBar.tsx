import { useEffect, useState } from "react";

import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { PodcastsState } from "../../store/reducers";
import { SelectedPodcasts } from "../../store/actionTypes";

const SideBar = () => {
  const navigate = useNavigate();

  const selectedPodcast = useSelector<PodcastsState>(
    (state) => state.selectedPodcasts
  ) as SelectedPodcasts;

  const [localPodcast, setLocalPodcast] = useState<{
    [key: string]: string | undefined;
  }>({});
  let { podcastId } = useParams();
  const handleClick = () => {
    navigate(`/podcast/${podcastId}`);
  };

  useEffect(() => {
    if (Object.keys(selectedPodcast).length && selectedPodcast.id !== 0) {
      localStorage.setItem("selectedPodcasts", JSON.stringify(selectedPodcast));
    }
  }, [selectedPodcast]);

  useEffect(() => {
    const storedSelectedPodcasts = localStorage.getItem("selectedPodcasts");

    if (storedSelectedPodcasts) {
      setLocalPodcast(JSON.parse(storedSelectedPodcasts));
    }
  }, []);

  return (
    <div className="card-sidebar">
      <div
        onClick={() => {
          handleClick();
        }}
        style={{ width: "75%" }}
      >
        <div className="card-content-sidebar">
          <img
            src={selectedPodcast.image || localPodcast.image}
            alt="Podcast"
            className="card-image-sidebar"
          />
          <br></br>
          <hr
            style={{
              width: "90%",
              height: "1px",
              border: "none",
              backgroundColor: "gray",
              opacity: "0.5",
            }}
          />

          <h3 style={{ marginBottom: "0" }} className="card-title-sidebar">
            {selectedPodcast.title || localPodcast.title}
          </h3>
          <p style={{ fontStyle: "italic", opacity: 0.5, marginTop: "0" }}>
            by {selectedPodcast.author || localPodcast.author}
          </p>

          <hr
            style={{
              width: "90%",
              height: "1px",
              border: "none",
              background: "gray",
              opacity: "0.5",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflowWrap: "break-word",
          }}
        >
          <h4 style={{ textAlign: "left" }}>Description:</h4>
          <p style={{ textAlign: "left", fontStyle: "italic", opacity: 0.5 }}>
            {selectedPodcast.summary || localPodcast.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
