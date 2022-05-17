import axios from "axios";

export const getAlbum = async (albumId, setAlbum) => {
  const response = await axios
    .get(`https://api.deezer.com/album/${albumId}`)
    .catch((error) => {
      console.log("Error: ", error);
    });
  setAlbum(response.data);
};
