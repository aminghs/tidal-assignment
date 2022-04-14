import { BASE_URL } from "../constants";
import axios from "axios";

const prepareSearchQuery = (query) => {
    const preUrl = `${BASE_URL}/search/album?q=${query}&limit=5`;
    return encodeURI(preUrl)
}

export const getAlbums = async (selectedArtist, setAlbums) => {
      const URL = prepareSearchQuery(selectedArtist);
      const response = await axios.get(URL).catch((error) => {
          console.log('Error: ', error);
      });
      setAlbums(response.data.data)
  }
