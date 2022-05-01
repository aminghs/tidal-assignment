import { ActionTypes } from "../constants/action-types";

export const autoComplete = (artists) => {
  return {
    type: ActionTypes.AUTO_COMPLETE,
    payload: artists,
  };
};

export const selectedArtist = (artist) => {
  return {
    type: ActionTypes.SELECTED_ARTIST,
    payload: artist,
  };
};
export const albumsList = (albums) => {
  return {
    type: ActionTypes.ALBUMS_LIST,
    payload: albums,
  };
};
export const selectedAlbum = (album) => {
    return {
      type: ActionTypes.SELECTED_ALBUM,
      payload: album,
    };
  };
export const trackList = (tracks) => {
    return {
      type: ActionTypes.TRACKS_LIST,
      payload: tracks,
    };
  };