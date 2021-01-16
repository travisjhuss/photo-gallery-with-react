function GalleryList({photoList}) {
    
    console.log('In GalleryList, photoList:', photoList);
    
    return (
        <>
            <h2>A Boy's Life</h2>
            <div className="container">
            {photoList.map(photo => (
                <p>id: {photo.id} URL: {photo.path} description: {photo.description} likes:{photo.likes} </p>
            ))}
            </div>
        </>
    );
} // end GalleryList

export default GalleryList;