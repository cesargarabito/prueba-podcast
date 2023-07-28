import React from "react";
import "./PodcastCard.css";
import { useContext } from "react";
import { PodcastsContext } from "../Contexts/PodcastContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Podcast } from "../../store/actionTypes";
import { SetPodcastsAction } from "../../store/actionTypes";
import { PodcastsActionTypes } from "../../store/actionTypes";

type PodcastCardProps = {
  title: string;
  author: string;
  image: string;
  summary: string;
  id: number;
};

const PodcastCard = ({
  title,
  author,
  image,
  summary,
  id,
}: PodcastCardProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const { setSelectedPodcasts } = useContext(PodcastsContext);
  const handleSelectedPodcast = (selectedPodcast: any) => {
    
    //setSelectedPodcasts(selectedPodcast);
    dispatch({ type: PodcastsActionTypes.SET_SELECTED_PODCASTS, payload: selectedPodcast });
    navigate(`/podcast/${selectedPodcast.id}`);
  };
  return (
    <div
      className="all-container"
      onClick={() => {
        handleSelectedPodcast({ image, title, author, summary, id });
      }}
    >
      <img src={image} alt="Podcast" className="card-image" />
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-author">
            <span style={{ fontStyle: "italic", opacity: 0.5 }}>Author:</span>{" "}
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
