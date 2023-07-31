
import { PodcastsAction, PodcastsActionTypes, Podcast, Episode, SelectedPodcasts, SelectedEpisodes } from "./actionTypes";

export interface PodcastsState {
  podcasts: Podcast[];
  selectedPodcasts: SelectedPodcasts; 
  episodes: Episode[];
  selectedEpisodes: SelectedEpisodes; 
}

const initialState: PodcastsState = {
  podcasts: [],
  selectedPodcasts: {
      title: "",
      author: "",
      image: "",
      summary: "",
      id: 0
  },
  episodes: [],
  selectedEpisodes: {
    title: "",
    description: "",
    episodeUrl: "",
    id: 0
  },
};

export const podcastsReducer = (
  state: PodcastsState = initialState,
  action: PodcastsAction
): PodcastsState => {
  switch (action.type) {
    
    case PodcastsActionTypes.SET_PODCASTS:
      return {
        ...state,
        podcasts: action.payload,
      };
    case PodcastsActionTypes.SET_SELECTED_PODCASTS:
      return {
        ...state,
        selectedPodcasts: action.payload,
      };
     case PodcastsActionTypes.SET_EPISODES:
       return {
         ...state,
         episodes: action.payload,
      };
    case PodcastsActionTypes.SET_SELECTED_EPISODES:
      return {
        ...state,
        selectedEpisodes: action.payload,
      };
    default:
      return state;
  }
};
