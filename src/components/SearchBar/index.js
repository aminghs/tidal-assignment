import React, {useState, useEffect} from 'react'
import './index.css'
import axios from 'axios'
import AlbumList from '../AlbumList';
import { BASE_URL } from '../../constants'

const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [autoComplete, setAutoComplete] = useState([])
    const [inputData, setInputData] = useState('')

    const changeHandler = (e) => {
        setSearchQuery(e)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setSearchQuery(e)
    }

    const prepareSearchQuery = (query) => {
        const url = `${BASE_URL}/search/artist?q=${query}&limit=3`;
        return encodeURI(url)
    }

    const getData = async () => {
        if (!searchQuery || searchQuery.trim() === '') return;
        const URL = prepareSearchQuery(searchQuery);
        const response = await axios.get(URL).catch((error) => {
            console.log('Error: ', error);
        });
        console.log(response.data.data)
        setAutoComplete(response.data.data)
    }

    useEffect(() => {
        getData()
    }, [searchQuery]);

    const closeSearchResultContainer = (searchQuery) => {
        setInputData(searchQuery)
        setSearchQuery('') 
    }

    return (
        <div>
            <form onSubmit={(e) => submitHandler(e.target.value)} >
                <input
                    placeholder='Search here'
                    type='text'
                    onChange={(e) => changeHandler(e.target.value)}
                    value={searchQuery}
                />
                <button type='button' className='search-button' >SEARCH</button>
            </form>

           {autoComplete.length && <div className='search-result-container' style={{ display: searchQuery ? 'block' : 'none' }}>
                <p>Search Results: </p>
                    {autoComplete.map((artist) => <div className='searchResult' key={artist.id} style={{ display: searchQuery ? 'block' : 'none' }} onClick={() => closeSearchResultContainer(artist.name)} >
                        <p>{artist.name}</p>
                    </div>)}
            </div>}
            <AlbumList selectedArtist={inputData} />
        </div>
    )
}
export default SearchBar