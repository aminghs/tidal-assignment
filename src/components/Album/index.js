import React, { useState, useEffect } from "react";
import "./index.css";
import { secondToMinute } from "../../utils/secondToMinute";
import { getTracks } from "../../api/tracks";
import { getAlbum } from "../../api/album";
import moment from "moment";

const Album = (props) => {
  const tracklist = props.selectedAlbum;
  const [album, setAlbum] = useState([]);
  const [al, setAl] = useState([]);

  useEffect(() => {
    getAlbum(props.album.id, setAl);
    getTracks(tracklist, setAlbum);
  }, [tracklist]);

  if (!album) {
    return;
  }

  return (
    <>
      <table className="tracks-table">
        <thead>
          <tr>
            <th>#</th>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Time</th>
            <th scope="col">Released</th>
          </tr>
        </thead>
        {album.map((track, index) => (
          <tbody key={track.id}>
            <tr>
              <td>{index + 1}</td>
              <td>{track.title}</td>
              <td>{track.artist.name}</td>
              <td>{secondToMinute(track.duration)}</td>
              <td>{moment(al.release_date, "YYYY-MM-DD").fromNow()}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
export default Album;

// or you can use this one for release date {moment(al.release_date).format("MMM Do, YYYY")}
