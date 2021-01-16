import { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
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
            <Grid item>
                <div className="photoBox" onClick={onImgClick}>
                    {descriptionDisplayed
                        ? <img src={photo.path} />
                        : <span>{photo.description}</span>
                    }
                </div>
                <Button
                    style={{
                        fontSize: 12
                    }}
                    onClick={onLike}
                    variant="contained"
                    color="primary" 
                >
                    <FavoriteBorder />
                </Button>
                <div>
                    {photo.likes}
                </div>
                <Button
                    style={{
                        fontSize: 12
                    }}
                    onClick={() => deletePhoto(photo.id)}
                    variant="contained"
                    color="primary" 
                >
                    <DeleteOutlined />
                </Button>
            </Grid>
        </>
    )
} // end GalleryItem

export default GalleryItem;