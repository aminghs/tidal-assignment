import React, {useState, useEffect} from 'react'
import './index.css'
import axios from 'axios'
import Album from '../Album'
import { BASE_URL } from '../../constants'

const AlbumList = ( props ) => {

    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState('')

    const prepareSearchQuery = (query) => {
      const preUrl = `${BASE_URL}/search/album?q=${query}&limit=5`;
      return encodeURI(preUrl)
  }

    const getData = async () => {
      const URL = prepareSearchQuery(props.selectedArtist);
      console.log(URL)
        const response = await axios.get(URL).catch((error) => {
            console.log('Error: ', error);
        });
        setAlbums(response.data.data)
    }

    useEffect(() => {
        getData()
    }, [props.selectedArtist]);

    const albumClick = (e) => {
        setTracks(e)
    }

    if (!albums) {
        return
    }

    return ( 
        <div>
           <div className='albums-result-container'>
                    {albums.map((album) => <div key={album.id} onClick={() => albumClick(album.tracklist)} >
                        <img src={album.cover_medium} alt='Album-cover' />
                        <p className='artist-name'>{album.title}</p>
                    </div>)}
            </div>
            {tracks && <Album selectedAlbum={tracks} />}
        </div>
        
    )
}
export default AlbumList