import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
import Header from '../Header/Header';
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

  const deletePhoto = (id) => {
    console.log('clicked delete');
    console.log('id:', id);

    axios.delete(`/gallery/${id}`)
        .then((response) => {
            console.log(response);
            getPhotos();
        }).catch((err) => {
            console.log(err);
        })
  } // end deletePhoto

  console.log('photoList:', photoList);
  return (
    <div className="App">
      <Header />
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
        deletePhoto={deletePhoto}
      />
    </div>
  );
}

export default App;
