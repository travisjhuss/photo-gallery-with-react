import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
import './App.css';

function App() {

  // variable for photoList
  const [photoList, setPhotoList] = useState([]);
  const [photoPath, setPhotoPath] = useState('');
  const [photoDescription, setPhotoDescription] = useState('');

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

  // POST for adding photo
  const addPhoto = (evt) => {
    evt.preventDefault();
    axios.post('/gallery', {
        path: photoPath,
        description: photoDescription
    }).then((response) => {
        console.log('Response in POST:', response.data);
        getPhotos();
        setPhotoPath('');
        setPhotoDescription('');
    }).catch((err) => {
        console.log(err);
    })
  } // end addPhoto

  console.log('photoList:', photoList);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My Best Friend</h1>
      </header>
      <GalleryForm 
        addPhoto={addPhoto}
        photoDescription={photoDescription}
        photoPath={photoPath}
        setPhotoDescription={setPhotoDescription}
        setPhotoPath={setPhotoPath} 
      />
      <GalleryList
        photoList={photoList}
        addLike={addLike}
      />
    </div>
  );
}

export default App;
