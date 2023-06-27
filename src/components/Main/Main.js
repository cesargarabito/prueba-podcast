import React, { useEffect, useState } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";
import './Main.css'

function Main() {
  const [podcasts, setPodcasts] = useState([]);

  const fetchData = () => {
    fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )
      .then((response) => response.json())
      .then((data) => setPodcasts(data.feed.entry));
  };

  useEffect(() => {
    fetchData();
    
  }, []);
  return (
    <div className="card-container">
      {podcasts.map((podcast, index) => {
        return (
          //console.log(podcast['im:artist'].label)
        <PodcastCard 
        key={index}
        image={podcast['im:image'][0].label}
        title={podcast.title.label}
        author={podcast['im:artist'].label}
        />
       
        )
      })}
      
    </div>
  );
}

export default Main;
