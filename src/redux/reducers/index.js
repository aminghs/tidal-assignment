import { combineReducers } from "redux";
import { artistsReducer, albumsReducer, tracksReducer } from "./productsReducer";
const reducers = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  tracks: tracksReducer,
});
export default reducers;