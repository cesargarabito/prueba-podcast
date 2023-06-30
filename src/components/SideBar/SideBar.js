import { useContext, useEffect, useState } from "react";
import { PodcastsContext } from "../Contexts/PodcastContext";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";

const SideBar = () => {
  const navigate = useNavigate();
  const { selectedPodcasts } = useContext(PodcastsContext);
  const [localPodcast, setLocalPodcast] = useState({});
  let { podcastId } = useParams();
  const handleClick = () => {
    navigate(`/podcast/${podcastId}`)
  }

  useEffect(() => {
    
    if (Object.keys(selectedPodcasts).length) {
      localStorage.setItem(
        "selectedPodcasts",
        JSON.stringify(selectedPodcasts)
      );
    }
  }, [selectedPodcasts]);

  useEffect(() => {
   
    const storedSelectedPodcasts = localStorage.getItem("selectedPodcasts");

    if (storedSelectedPodcasts) {
      setLocalPodcast(JSON.parse(storedSelectedPodcasts));
    }
  }, []);

  return (
    <div className="card">

      <div onClick={() => {handleClick()}}>
      <div className="card-content-sidebar">
        <img
          src={selectedPodcasts.image || localPodcast.image}
          alt="Podcast"
          className="card-image-sidebar"
        />
        <br></br>
        <hr
          style={{
            width: "90%",
            height: "1px",
            border: "none",
            background: "gray",
          }}
        />

        <h3 style={{ marginBottom: "0" }} className="card-title-sidebar">
          {selectedPodcasts.title || localPodcast.title}
        </h3>
        <p style={{ fontStyle: "italic", opacity: 0.5, marginTop: "0" }}>
          by {selectedPodcasts.author || localPodcast.author}
        </p>

        <hr
          style={{
            width: "90%",
            height: "1px",
            border: "none",
            background: "gray",
          }}
        />
        </div>
        <div>
          <h4 style={{ textAlign: "left" }}>Description:</h4>
          <p style={{ textAlign: "left", fontStyle: "italic", opacity: 0.5 }}>
            {selectedPodcasts.summary || localPodcast.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
