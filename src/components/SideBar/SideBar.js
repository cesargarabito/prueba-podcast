import { useParams } from "react-router-dom";

const SideBar = ({ title, author, image, summary, id }) => {

    let podcastId = useParams(id);
    console.log(podcastId);

    return (
      <div className="card">
        <img src={image} alt="Podcast" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-author">
            <span style={{ fontStyle: "italic", opacity: 0.5 }}>Author:</span>{" "}
            {author}
          </p>
          <p>{summary}</p>
        </div>
      </div>
    );
  };
  
  export default SideBar;