import "./App.css";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import PodcastDetail from "./components/PodcastDetail/PodcastDetail";
import EpisodeDetail from "./components/EpisodeDetail/EpisodeDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
      <Route
        path="/podcast/:podcastId/episode/:episodeId"
        element={<EpisodeDetail />}
      />
    </Routes>
  );
}

export default App;
