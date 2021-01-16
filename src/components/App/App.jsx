import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {

  // variable for photoList
  const [photoList, setPhotoList] = useState([]);

  //On load, get photos
  useEffect(() => {
    getPhotos();
  }, [])

  // GET table from DB
  const getPhotos = () => {
    axios.get('/gallery')
      .then((response) => {
        console.log('response.data from server:', response.data);
        setPhotoList(response.data)
      }).catch((error) => {
        console.log('Error in GET', error);
      });
  } // end getPhotos

  // PUT for Likes
  const addLike = (id) => {
    axios.put(`/gallery/like/${id}`)
      .then((response) => {
        getPhotos();
      }).catch((err) => {
        console.log('Error in Like PUT:', err);
      })
  } // end handleLike

  console.log('photoList:', photoList);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Morton J. Huss, a Gallery</h1>
      </header>
      <GalleryList
        photoList={photoList}
        addLike={addLike}
      />
    </div>
  );
}

export default App;
