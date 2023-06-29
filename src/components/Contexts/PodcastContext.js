import React, { createContext, useState } from "react";

export const PodcastsContext = createContext();

export const PodcastsProvider = ({ children }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [selectedPodcasts, setSelectedPodcasts] = useState({});
  const [ episodes, setEpisodes ] = useState([]);
  const [selectedEpisodes, setSelectedEpisodes] = useState({});
  const fetchData = () => {
    fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )
      .then((response) => response.json())
      .then((data) => setPodcasts(data.feed.entry));
  };

  const values = {
    podcasts,
    setPodcasts,
    fetchData,
    selectedPodcasts,
    setSelectedPodcasts,
    episodes,
    setEpisodes,
    selectedEpisodes,
    setSelectedEpisodes
  }

  return (
    <PodcastsContext.Provider value={values}>
      {children}
    </PodcastsContext.Provider>
  );
};
