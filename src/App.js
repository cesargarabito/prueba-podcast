
import './App.css';
import Main from './components/Main/Main';
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import { PodcastsProvider } from './components/Contexts/PodcastContext';
import PodcastDetail from './components/PodcastDetail/PodcastDetail';
import EpisodeDetail from './components/EpisodeDetail/EpisodeDetail';

function App() {
  return (
    <PodcastsProvider>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path='/podcast/:podcastId' element={ <PodcastDetail />} />
      <Route path='/podcast/:podcastId/episode/:episodeId' element={ <EpisodeDetail />} />

    </Routes>
    </PodcastsProvider>
  );
}

export default App;
