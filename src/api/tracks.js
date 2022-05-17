import axios from "axios";

export const getTracks = async (tracklist, setTracks) => {
  const response = await axios.get(tracklist).catch((error) => {
    console.log("Error: ", error);
  });
  console.log(response);
  setTracks(response.data.data);
};
