import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import SideBar from "../SideBar/SideBar";
import EpisodeSection from "../EpisodesSection/EpisodeSection";
import { useContext } from "react";
import { PodcastsContext } from "../Contexts/PodcastContext";
import Header from "../Header";
import './PodcastDetail.css'

const PodcastDetail = () => {
  let { podcastId } = useParams();
  const { episodes, setEpisodes } = useContext(PodcastsContext);
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    episodesList();
  }, [podcastId]);
  return (
    <div>
      <Header />
      <div className="card-container-podcastdetail">
        <SideBar />
        <EpisodeSection episodes={episodes} />
      </div>
    </div>
  );
};

export default PodcastDetail;
