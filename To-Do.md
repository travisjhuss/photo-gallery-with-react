To Do List for React-Gallery


Set-Up
[x] - npm install
[x] - npm install axios
[x] - add photos to public/images folder
[x] - add photo data to gallery.data.js
[x] - gallery list component and css
[x] - gallery item component and css

App
[x] - import axios, useState, useEffect
[x] - axios.get gallery data
[x] - pass data to List component
[x] - import GalleryList


GalleryList
[x] - loop over data, make items
[x] - pass items to GalleryItem
[x] - import GalleryItem


GalleryItem
[x] - Swap the image with the description on click. Use conditional rendering
[x] - Display the number likes for each item and include a like button
[x] - When the like button is clicked, use Axios to update (PUT) the like count /gallery/like/:id
[x] - Update the gallery each time a like button is clicked.


STRETCH GOALS
[ ] - Use Git Branching for each feature 
[x] - Move the data into a database (postgresql)
    [x] - name your database react_gallery
    [x] - include a database.sql file documenting your database tables
    [x] - npm install pg
[x] - Add a form (new component) that allows a user to POST a new gallery item
    [x] - Client side form (use absolute URL for images)
    [x] - Server side route for posting an image
[ ] - Ability to delete a gallery item
[ ] - Add styling with Material-UI
[ ] - Implement uppy for image upload

NOTE: The above stretch goals are intended to be completed in order.