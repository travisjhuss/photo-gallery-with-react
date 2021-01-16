import './GalleryItem.css';

function GalleryItem({ photo }) {

    return (
        <>
            <div className="gridItem">
                <img src={photo.path} />
                <p>{photo.description}</p>
                <p>Likes:{photo.likes}</p>
            </div>
        </>
    )
} // end GalleryItem

export default GalleryItem;