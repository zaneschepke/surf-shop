const express = require('express');
const router = express.Router();
const {
    errorHandler
} = require('../middleware/index');
const {
    getPosts,
    newPost,
    createPost,
    showPost,
    editPost
} = require('../controllers/posts')
/* GET home posts index /posts */
router.get('/', errorHandler(getPosts));

/* GET get form for new post /posts/new */
// New route before show route
router.get('/new', newPost);

/* POST for create new post */
router.post('/', errorHandler(createPost));

/* GET posts show /posts/:id */
router.get('/:id', errorHandler(showPost));

/* GET posts edit for new post /posts/:id/edit */
router.get('/:id/edit', errorHandler(editPost));

/* PUT posts update /posts/:id*/
router.put('/:id', (req, res, next) => {
    res.send('PUT /posts/:id');
});

/* DELETE posts remove /posts/:id*/
router.delete('/:id', (req, res, next) => {
    res.send('REMOVE /posts/:id');
});

module.exports = router;