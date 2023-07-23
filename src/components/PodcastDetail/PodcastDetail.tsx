import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SideBar from "../SideBar/SideBar";
import EpisodeSection from "../EpisodesSection/EpisodeSection";
import { useContext } from "react";
import { PodcastsContext } from "../Contexts/PodcastContext";
import Header from "../Header";
import './PodcastDetail.css';
import Loader from "../Loader/Loader";

const PodcastDetail = () => {
  let { podcastId } = useParams();
  const { episodes, setEpisodes } = useContext(PodcastsContext);
  const [isLoading, setIsLoading] = useState(true);

  const episodesList = async () => {
    try {
      const response = await axios.get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
        )}`
      );
      
      const parseData = JSON.parse(response.data.contents);
      const results = parseData.results;
      
      setEpisodes(results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    episodesList();
  });

  return (
    <div>
      <Header />
      <div className="card-container-podcastdetail">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="episode-section-container">
          {isLoading ? (
            <Loader />
          ) : (
            <EpisodeSection episodes={episodes} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;
