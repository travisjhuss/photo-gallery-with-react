import './GalleryItem.css';

function GalleryItem({ 
    photo,
    addLike
 }) {

    const onLike = () => {
        console.log('clicked Like');
        addLike(photo.id);
    } // end onLike

    return (
        <>
            <div className="gridItem">
                <img src={photo.path} />
                <p>{photo.description}</p>
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