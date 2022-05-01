import { BASE_URL } from "../constants";
import axios from "axios";

const prepareSearchQuery = (query) => {
    const preUrl = `${BASE_URL}/search/artist?q=${query}&limit=3`;
    return encodeURI(preUrl)
}

export const getArtists = async (searchQuery, setAutoComplete) => {
    if (!searchQuery || searchQuery.trim() === '') return;
    const URL = prepareSearchQuery(searchQuery);
    const response = await axios.get(URL).catch((error) => {
        console.log('Error: ', error);
    });
    setAutoComplete(response.data.data)
}

