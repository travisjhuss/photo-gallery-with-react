import { useState } from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import './GalleryItem.css';
import { FavoriteBorder, DeleteOutlined } from '@material-ui/icons';

function GalleryItem({
    photo,
    addLike,
    deletePhoto
}) {
    const [descriptionDisplayed, setDescriptionDisplayed] = useState(true);
    
    const onLike = () => {
        console.log('clicked Like');
        addLike(photo.id);
    } // end onLike

    const onImgClick = () => {
        console.log('clicked image', descriptionDisplayed);
        setDescriptionDisplayed(!descriptionDisplayed);
    } // end onImgClick


    return (
        <>
            <Paper id="gallery-item">
                <div id="photo-container">
                    <div id="photo-box" onClick={onImgClick}>
                    {descriptionDisplayed
                        ? <img src={photo.path} />
                        : <><img id="opacity" src={photo.path} /><div id="photo-desc">{photo.description}</div></>
                    }
                    </div>
                    <Button
                        id="like-btn"
                        style={{
                            fontSize: 12
                        }}
                        onClick={onLike}
                        variant="contained"
                    >
                        <FavoriteBorder />
                    </Button>
                    
                    <Typography
                        id="like-counter"    
                    >{photo.likes}</Typography>
                    <Button
                        id="delete-btn"
                        style={{
                            fontSize: 12
                        }}
                        onClick={() => deletePhoto(photo.id)}
                        variant="contained"
                    >
                        <DeleteOutlined />
                    </Button>
                </div>
            </Paper>
        </>
    )
} // end GalleryItem

export default GalleryItem;