import React, { useEffect, useState } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";
import "./Main.css";
import { useContext } from "react";
import { PodcastsContext } from "../Contexts/PodcastContext";
import Header from "../Header";

function Main() {
  const { podcasts, fetchData } = useContext(PodcastsContext);
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };
  const filteredPodcasts = podcasts.filter(
    (podcast) =>
      podcast.title.label.toLowerCase().includes(filterText.toLowerCase()) ||
      podcast["im:artist"].label
        .toLowerCase()
        .includes(filterText.toLowerCase())
  );

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ margin: "2px" }}>
      <Header />
      <div className="filter-container">
        <div className="filter-text">{filteredPodcasts.length}</div>
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
              id={podcast.id.attributes["im:id"]}
              image={podcast["im:image"][0].label}
              title={podcast['im:name'].label}
              author={podcast["im:artist"].label}
              summary={podcast.summary.label}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;