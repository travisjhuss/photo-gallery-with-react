import GalleryList from "../GalleryList/GalleryList";

import './GalleryForm.css';

function GalleryForm({
    addPhoto,
    photoDescription,
    photoPath,
    setPhotoDescription,
    setPhotoPath
}) {
    return (
        <form className="input-form" onSubmit={addPhoto}>
            <div>Add a photo of your best friend...</div>
            <label htmlFor="url-input">Photo url: </label>
            <input
                id="url-input"
                placeholder="ex. images/photo.jpg"
                value={photoPath}
                onChange={e => setPhotoPath(e.target.value)}
            />
            <br />
            <label htmlFor="description-input">Tell me about your photo: </label>
            <input
                id="description-input"
                value={photoDescription}
                onChange={e => setPhotoDescription(e.target.value)}
            />
            <br />
            <button type="submit" onClick={addPhoto}>Submit</button>
        </form>
    )
} // end GalleryForm

export default GalleryForm;