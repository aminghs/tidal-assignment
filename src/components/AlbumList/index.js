import React, {useState, useEffect} from 'react'
import './index.css'
import Album from '../Album'
import { getAlbums } from '../../api/albums'

const AlbumList = ( props ) => {

    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState('')
    const selectedArtist = props.selectedArtist

    useEffect(() => {
        getAlbums(selectedArtist, setAlbums)
    }, [selectedArtist]);

    const albumClick = (e) => {
        setTracks(e)
    }

    if (!albums) {
        return
    }

    return ( 
        <div>
            <h1>Search result for {props.selectedArtist}</h1>
            <div className='albums-result-container'>
                        {albums.map((album) => <div key={album.id} onClick={() => albumClick(album.tracklist)} >
                            <img src={album.cover_medium} alt='Album-cover' />
                            <p className='artist-name'>{album.title}</p>
                        </div>)}
            </div>
            {tracks && <Album selectedAlbum={tracks}/>}
        </div>
        
    )
}
export default AlbumList