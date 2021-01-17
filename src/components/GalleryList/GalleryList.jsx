import GalleryItem from '../GalleryItem/GalleryItem';
import { Grid } from '@material-ui/core';
import './GalleryList.css';

function GalleryList({ 
    photoList,
    addLike,
    deletePhoto
}) {

    console.log('In GalleryList, photoList:', photoList);

    return (
        <>
            <Grid 
                container 
                id="list-container"
            >
                {photoList.map(photo => (
                    <GalleryItem
                        key={photo.id}
                        photo={photo}
                        addLike={addLike}
                        deletePhoto={deletePhoto}
                    />
                ))}
            </Grid>
        </>
    );
} // end GalleryList

export default GalleryList;