import { useEffect, useState } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";
import "./Main.css";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { Podcast, PodcastsActionTypes } from "../../store/actionTypes";
import { PodcastsState } from "../../store/reducers";
import Loader from "../Loader/Loader";

const Main: React.FC = () => {
  const dispatch = useDispatch();

  const podcasts = useSelector<PodcastsState, Podcast[]>(
    (state) => state.podcasts
  );
  const [filterText, setFilterText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleFilterChange = (event: any) => {
    setFilterText(event.target.value);
  };

  useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: PodcastsActionTypes.SET_PODCASTS,
            payload: data.feed.entry,
          });
        });
      setIsLoading(false);
    };

    fetchData();
  }, [dispatch]);
  const filteredPodcasts = podcasts?.filter(
    (podcast: any) =>
      podcast.title.label.toLowerCase().includes(filterText.toLowerCase()) ||
      podcast["im:artist"].label
        .toLowerCase()
        .includes(filterText.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="filter-container">
        <div className="filter-text">{filteredPodcasts?.length}</div>
        <input
          type="text"
          placeholder="Filtrar por título o autor"
          className="filter-input"
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>
      <div className="card-container">
        {isLoading ? (
          <Loader />
        ) : (
          filteredPodcasts?.map((podcast: any, index: number) => {
            return (
              <PodcastCard
                key={index}
                id={podcast.id.attributes["im:id"]}
                image={podcast["im:image"][0].label}
                title={podcast["im:name"].label}
                author={podcast["im:artist"].label}
                summary={podcast.summary.label}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Main;
