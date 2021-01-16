import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList({ photoList }) {

    console.log('In GalleryList, photoList:', photoList);

    return (
        <>
            <h2>A Boy's Life</h2>
            <div className="container">
                {photoList.map(photo => (
                    <GalleryItem
                        key={photo.id}
                        photo={photo}
                    />
                ))}
            </div>
        </>
    );
} // end GalleryList

export default GalleryList;