import React, { useState, useEffect } from "react";
import "./index.css";
import Album from "../Album";
import { getAlbums } from "../../api/albums";

const AlbumList = ({ selectedArtist }) => {
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState("");
  const [album, setAlbum] = useState("");

  useEffect(() => {
    getAlbums(selectedArtist, setAlbums);
  }, [selectedArtist]);

  if (!albums) {
    return;
  }

  return (
    <div>
      <h1>Search result for {selectedArtist}</h1>
      <div className="albums-result-container">
        {albums.map((album) => (
          <div
            key={album.id}
            onClick={(e) => (setTracks(album.tracklist), setAlbum(album))}
          >
            <img src={album.cover_medium} alt="Album-cover" />
            <p className="artist-name">{album.title}</p>
          </div>
        ))}
      </div>
      {tracks && <Album selectedAlbum={tracks} album={album} />}
    </div>
  );
};
export default AlbumList;
