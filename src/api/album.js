import axios from "axios";

export const getAlbum = async (tracklist, setAlbum) => {
    const response = await axios.get(tracklist).catch((error) => {
        console.log('Error: ', error);
    });
    setAlbum(response.data.data)
}
