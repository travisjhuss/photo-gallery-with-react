import { TextField, Typography, Button, Drawer, createMuiTheme } from '@material-ui/core';
import './GalleryForm.css';

function GalleryForm({
    addPhoto,
    photoDescription,
    photoPath,
    setPhotoDescription,
    setPhotoPath
}) {
    return (
        <Drawer
            variant="permanent"
            anchor="bottom"
        >
            <form className="input-form" onSubmit={addPhoto}>
                <Typography
                    variant="h6"
                >
                    Add a photo of your best friend...</Typography>
                <TextField
                    label="Photo url:"
                    variant="filled"
                    id="url-input"
                    placeholder="ex. images/photo.jpg"
                    margin="dense"
                    value={photoPath}
                    color="primary"
                    onChange={e => setPhotoPath(e.target.value)}
                />
                <TextField
                    label="Description:"
                    variant="filled"
                    id="description-input"
                    margin="dense"
                    color="primary"
                    value={photoDescription}
                    onChange={e => setPhotoDescription(e.target.value)}
                />
                <Button
                    id="submit-btn"
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={addPhoto}
                >
                    Submit
            </Button>
            </form>
        </Drawer>
    )
} // end GalleryForm

export default GalleryForm;