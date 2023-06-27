import React, { useEffect, useState } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";
import "./Main.css";

function Main() {
  const [podcasts, setPodcasts] = useState([]);
  const [filterText, setFilterText] = useState("");

  const fetchData = () => {
    fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )
      .then((response) => response.json())
      .then((data) => setPodcasts(data.feed.entry));
  };
  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };
  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.title.label.toLowerCase().includes(filterText.toLowerCase()) ||
    podcast["im:artist"].label.toLowerCase().includes(filterText.toLowerCase())
  );

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
    <div className="filter-container">
    <div className="filter-text">
          {filteredPodcasts.length} 
        </div>
        <input
          type="text"
          placeholder="Filtrar por título o autor"
          className="filter-input"
          value={filterText}
          onChange={handleFilterChange}
        />
        
      </div>
    <div className="card-container">
      {filteredPodcasts.map((podcast, index) => {
        return (
          <PodcastCard
            key={index}
            image={podcast["im:image"][0].label}
            title={podcast.title.label}
            author={podcast["im:artist"].label}
          />
        );
      })}
    </div>
    </div>
  );
}

export default Main;
