import "./App.css";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import { PodcastsProvider } from "./components/Contexts/PodcastContext";
import PodcastDetail from "./components/PodcastDetail/PodcastDetail";
import EpisodeDetail from "./components/EpisodeDetail/EpisodeDetail";
//import Loading from "./components/Loading.tsx";
import React from "react";

function App() {
  return (
    <PodcastsProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={<EpisodeDetail />}
        />
      </Routes>
      {/* //<Loading /> */}
    </PodcastsProvider>
  );
}

export default App;
