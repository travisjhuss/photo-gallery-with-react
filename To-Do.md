To Do List for React-Gallery


Set-Up
[x] - npm install
[x] - npm install axios
[ ] - add photos to public/images folder
[ ] - add photo data to gallery.data.js
[ ] - gallery list component and css
[ ] - gallery item component and css

App
[ ] - import axios
[ ] - axios.get gallery data
[ ] - pass data to List component
[ ] - import GalleryList


GalleryList
[ ] - loop over data, make items
[ ] - pass items to GalleryItem
[ ] - import GalleryItem


GalleryItem
[ ] - Swap the image with the description on click. Use conditional rendering
[ ] - Display the number likes for each item and include a like button
[ ] - When the like button is clicked, use Axios to update (PUT) the like count /gallery/like/:id
[ ] - Update the gallery each time a like button is clicked.


STRETCH GOALS
[ ] - Use Git Branching for each feature 
[ ] - Move the data into a database (postgresql)
    [ ] - name your database react_gallery
    [ ] - include a database.sql file documenting your database tables
[ ] - Add a form (new component) that allows a user to POST a new gallery item
    [ ] - Client side form (use absolute URL for images)
    [ ] - Server side route for posting an image
[ ] - Ability to delete a gallery item
[ ] - Add styling with Material-UI
[ ] - Implement uppy for image upload

NOTE: The above stretch goals are intended to be completed in order.