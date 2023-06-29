import { useContext, useEffect } from "react";
import { PodcastsContext } from "../Contexts/PodcastContext";
import "./SideBar.css";

const SideBar = () => {
  const { selectedPodcasts, setSelectedPodcasts } = useContext(PodcastsContext);

  // useEffect(() => {
  //   // Guardar el objeto selectedPodcasts en localStorage
  //   localStorage.setItem("selectedPodcasts", JSON.stringify(selectedPodcasts));
  // }, [selectedPodcasts]);

  // useEffect(() => {
  //   // Recuperar el objeto selectedPodcasts de localStorage al cargar el componente
  //   const storedSelectedPodcasts = localStorage.getItem("selectedPodcasts");
  //   if (storedSelectedPodcasts) {
  //     setSelectedPodcasts(JSON.parse(storedSelectedPodcasts));
  //   }
  // }, []);

  return (
    <div className="card">
      <div className="card-content-sidebar">
        <img
          src={selectedPodcasts.image}
          alt="Podcast"
          className="card-image-sidebar"
        />
        <br></br>
        <hr
          style={{
            width: "90%",
            height: "1px",
            border: "none",
            background: "gray",
          }}
        />
        
        <h3 style={{marginBottom: '0'}} className="card-title-sidebar">
          {selectedPodcasts.title}
        </h3>
        <p style={{ fontStyle: "italic", opacity: 0.5, marginTop: '0' }}>
          by {selectedPodcasts.author}
        </p>
        
        <hr
          style={{
            width: "90%",
            height: "1px",
            border: "none",
            background: "gray",
          }}
        />
        <div>
          <h4 style={{ textAlign: "left" }}>Description:</h4>
          <p style={{ textAlign: "left", fontStyle: "italic", opacity: 0.5 }}>
            {selectedPodcasts.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
