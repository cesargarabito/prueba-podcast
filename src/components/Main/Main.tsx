import  { useEffect, useState } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";
import "./Main.css";
import { useContext } from "react";
import { PodcastsContext } from "../Contexts/PodcastContext";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { Podcast, PodcastsActionTypes } from "../../store/actionTypes";
import { PodcastsState } from "../../store/reducers";


const Main: React.FC = () => {
  const dispatch = useDispatch();
  //const { podcasts, fetchData } = useContext(PodcastsContext);
  const podcasts = useSelector<PodcastsState, Podcast[]>((state) => state.podcasts);
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (event: any) => {
    setFilterText(event.target.value);
  };
  
useEffect(() => {
    // Disparar la acción fetchData() utilizando dispatch de Redux
    const fetchData = () => {
      fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")
        .then((response) => response.json())
        .then((data) => {
        console.log(data.feed.entry)
        dispatch({ type: PodcastsActionTypes.SET_PODCASTS, payload: data.feed.entry })});
        
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
  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);
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
        {filteredPodcasts?.map((podcast: any, index: number) => {
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
