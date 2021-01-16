function GalleryItem({ photo }) {

    return (
        <>
            <p>id: {photo.id} URL: {photo.path} description: {photo.description} likes:{photo.likes} </p>
        </>
    )
} // end GalleryItem

export default GalleryItem;