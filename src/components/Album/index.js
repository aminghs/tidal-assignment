import React, {useState, useEffect} from 'react'
import './index.css'
import { secondToMinute } from '../../utils/secondToMinute'
import { getAlbum } from '../../api/album'

const Album = ( props ) => {
    const tracklist = props.selectedAlbum;
    const [album, setAlbum] = useState([])

    useEffect(() => {
        getAlbum(tracklist, setAlbum)
    }, [tracklist]);

    if (!album) {
        return;
    }

    return (
        <div>
          <table className='tracks-table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Time</th>
                <th>Released</th>
              </tr>
            </thead>
            {album.map((track, index) =>  <tbody key={track.id}>
              <tr>
                  <td>{index + 1}</td>
                  <td>{track.title}</td>
                  <td>{track.artist.name}</td>
                  <td>{secondToMinute(track.duration)}</td>
                  <td>2011</td>
              </tr>
            </tbody>
            )}
        </table>
        </div>
    )
}
export default Album;