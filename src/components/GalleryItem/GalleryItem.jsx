import { useState } from 'react';
import { Button, ButtonGroup, Grid, Paper, Typography } from '@material-ui/core';
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
            <Paper>
                <div id="photo-container">
                    <div id="photo-box" onClick={onImgClick}>
                    {descriptionDisplayed
                        ? <img src={photo.path} />
                        : <span>{photo.description}</span>
                    }
                    </div>
                    <Button
                        id="like-btn"
                        style={{
                            fontSize: 12
                        }}
                        onClick={onLike}
                        variant="contained"
                        color="primary"
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
                        color="primary"
                    >
                        <DeleteOutlined />
                    </Button>
                </div>
            </Paper>
        </>
    )
} // end GalleryItem

export default GalleryItem;