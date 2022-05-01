import { ActionTypes } from "../constants/action-types";
const intialState = {
  autoComplete: [],
  artist: [],
  albums: [],
  selectedAlbum: [],
  tracksList: []
};

export const artistsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.AUTO_COMPLETE:
      return { ...state, artists: payload };
    case ActionTypes.SELECTED_ARTIST:
        return { ...state, artist: payload}
    default:
      return state;
  }
};

export const albumsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ALBUMS_LIST:
      return { ...state, ...payload };
    case ActionTypes.SELECTED_ALBUM:
      return {};
    default:
      return state;
  }
};
export const tracksReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.TRACKS_LIST:
        return { ...state, tracks: payload };
      default:
        return state;
    }
  };
