
export enum PodcastsActionTypes {
    SET_PODCASTS = "SET_PODCASTS",
    SET_SELECTED_PODCASTS = "SET_SELECTED_PODCASTS",
    SET_EPISODES = "SET_EPISODES",
    SET_SELECTED_EPISODES = "SET_SELECTED_EPISODES",
  }
  
  export interface Podcast {
    title: string;
  author: string;
  image: string;
  summary: string;
  id: number;
  }
  export interface SelectedPodcasts {
    title: string;
    author: string;
    image: string;
    summary: string;
    id: number;
  }
  export interface Episode {
    title: string;
    data: string;
    duration: string
  }

  export interface SelectedEpisodes {
    title: string;
    description: string;
    episodeUrl: string;
    id: number;
  }
  
  export interface SetPodcastsAction {
    type: PodcastsActionTypes.SET_PODCASTS;
    payload: Podcast[];
  }
  
  export interface SetSelectedPodcastsAction {
    type: PodcastsActionTypes.SET_SELECTED_PODCASTS;
    payload: SelectedPodcasts; 
  }
  
  export interface SetEpisodesAction {
    type: PodcastsActionTypes.SET_EPISODES;
    payload: Episode[];
  }
  
  export interface SetSelectedEpisodesAction {
    type: PodcastsActionTypes.SET_SELECTED_EPISODES;
    payload: SelectedEpisodes; 
  }
  
  export type PodcastsAction =
    | SetPodcastsAction
    | SetSelectedPodcastsAction
    | SetEpisodesAction
    | SetSelectedEpisodesAction;
  