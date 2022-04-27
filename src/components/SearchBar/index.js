import React, {useState, useEffect} from 'react'
import './index.css'
import AlbumList from '../AlbumList';
import { getArtists } from '../../api/artists';

const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [autoComplete, setAutoComplete] = useState([])
    const [selectedArtist, setSelectedArtist] = useState('')

    const changeHandler = (e) => {
        setSearchQuery(e)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setSearchQuery(e)
    }

    useEffect(() => {
        getArtists(searchQuery, setAutoComplete)
    }, [searchQuery]);

    const closeSearchResultContainer = (searchQuery) => {
        setSelectedArtist(searchQuery)
        setSearchQuery('') 
    }

    return (
        <div>
            <form onSubmit={(e) => submitHandler(e.target.value)} >
                <input
                    placeholder='Search here'
                    type='search'
                    onChange={(e) => changeHandler(e.target.value)}
                    value={searchQuery}
                    autoFocus
                    ariaAutocomplete='list'/>
                <button type='button' className='search-button'>SEARCH</button>
            </form>
           {autoComplete && <div className='search-result-container' style={{ display: searchQuery ? 'block' : 'none' }}>
                <p>Search Results: </p>
                    {autoComplete.map((artist) => <div className='searchResult' 
                        key={artist.id} 
                        style={{ display: searchQuery ? 'block' : 'none' }} 
                        onClick={() => closeSearchResultContainer(artist.name)} >
                        <p>{artist.name}</p>
                    </div>)}
            </div>}
            {selectedArtist && <AlbumList selectedArtist={selectedArtist} />}
        </div>
    )
}
export default SearchBar