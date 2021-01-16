import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem({
    photo,
    addLike
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
            <div className="gridItem">
                <div className="photoBox" onClick={onImgClick}>
                    {descriptionDisplayed
                        ? <img src={photo.path} />
                        : <span>{photo.description}</span>
                    }
                </div>
                <div>
                    <button onClick={onLike}>Like</button>
                </div>
                <div>
                    {photo.likes}
                </div>
            </div>
        </>
    )
} // end GalleryItem

export default GalleryItem;