const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// // PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// // GET route for gallery.data
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

// GET route for database
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "gallery" ORDER BY "id" ASC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log('from db', result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log(`err with db query ${sqlText}`, err);
            res.sendStatus(500);
        })

})

// PUT route for database
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    console.log('Delete route with id of', galleryId);

    const query = `
        UPDATE "gallery" 
        SET "likes" = "likes" + 1
        WHERE "id" = $1;
        `;

    pool.query(query, [galleryId])
        .then((result) => {
            res.sendStatus(204);
        }).catch((error) => {
            console.log('error');
            res.sendStatus(500);
        })
});

module.exports = router;