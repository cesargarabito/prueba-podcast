import React from "react";
import "./PodcastCard.css";

const PodcastCard = ({ title, author, image }) => {
  return (
    <div className="card">
      <img src={image} alt="Podcast" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-author">
          <span style={{ fontStyle: "italic", opacity: 0.5 }}>Author:</span>{" "}
          {author}
        </p>
      </div>
    </div>
  );
};

export default PodcastCard;
