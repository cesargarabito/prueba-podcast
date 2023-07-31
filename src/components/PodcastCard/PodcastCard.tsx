import "./PodcastCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PodcastsActionTypes } from "../../store/actionTypes";

type PodcastCardProps = {
  title: string;
  author: string;
  image: string;
  summary: string;
  id: number;
};

const PodcastCard = ({
  title,
  author,
  image,
  summary,
  id,
}: PodcastCardProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectedPodcast = (selectedPodcast: any) => {
    dispatch({
      type: PodcastsActionTypes.SET_SELECTED_PODCASTS,
      payload: selectedPodcast,
    });
    navigate(`/podcast/${selectedPodcast.id}`);
  };
  return (
    <div
      className="all-container"
      onClick={() => {
        handleSelectedPodcast({ image, title, author, summary, id });
      }}
    >
      <img src={image} alt="Podcast" className="card-image" />
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-author">
            <span style={{ fontStyle: "italic", opacity: 0.5 }}>Author:</span>{" "}
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
