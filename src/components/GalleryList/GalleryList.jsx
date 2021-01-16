import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList({ 
    photoList,
    addLike,
    deletePhoto
}) {

    console.log('In GalleryList, photoList:', photoList);

    return (
        <>
            <h2>Morton J. Huss</h2>
            <div className="container">
                {photoList.map(photo => (
                    <GalleryItem
                        key={photo.id}
                        photo={photo}
                        addLike={addLike}
                        deletePhoto={deletePhoto}
                    />
                ))}
            </div>
        </>
    );
} // end GalleryList

export default GalleryList;