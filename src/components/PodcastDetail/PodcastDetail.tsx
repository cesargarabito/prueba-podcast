import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import SideBar from "../SideBar/SideBar";
import EpisodeSection from "../EpisodesSection/EpisodeSection";
import Header from "../Header";
import "./PodcastDetail.css";
import Loader from "../Loader/Loader";
import { PodcastsActionTypes } from "../../store/actionTypes";
import { Episode } from "../../store/actionTypes";
import { PodcastsState } from "../../store/reducers";

const PodcastDetail = () => {
  const dispatch = useDispatch();
  let { podcastId } = useParams();
  const episodes = useSelector<PodcastsState, Episode[]>(
    (state) => state.episodes
  );
  const [isLoading, setIsLoading] = useState(true);

  const episodesList = async () => {
    try {
      const response = await axios.get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`
        )}`
      );
      const parseData = JSON.parse(response.data.contents);
      const results = parseData.results;
      dispatch({ type: PodcastsActionTypes.SET_EPISODES, payload: results });
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
          {isLoading ? <Loader /> : <EpisodeSection episodes={episodes} />}
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;
