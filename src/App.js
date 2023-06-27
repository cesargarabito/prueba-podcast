
import './App.css';
import Main from './components/Main/Main';
import { Routes, Route, Router } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path='/podcast/:podcastId' element={ <SideBar />} />
    </Routes>
  );
}

export default App;
