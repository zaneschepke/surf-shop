const express = require('express');
const router = express.Router();
const { errorHandler } = require('../middleware/index');
const { getPosts } = require('../controllers/posts')
/* GET home posts index /posts */
router.get('/', errorHandler(getPosts));

/* GET get form for new post /posts/new */
// New route before show route
router.get('/new', (req, res, next) => {
    res.send('/posts/new');
});

/* POST for create new post */
router.post('/', (req, res, next) => {
    res.send('CREATE /posts');
});

/* GET posts show /posts/:id */
router.get('/:id', (req, res, next) => {
    res.send(' show /posts/new');
});

/* GET posts edit for new post /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/edit');
});

/* PUT posts update /posts/:id*/
router.put('/:id', (req, res, next) => {
    res.send('PUT /posts/:id');
});

/* DELETE posts remove /posts/:id*/
router.delete('/:id', (req, res, next) => {
    res.send('REMOVE /posts/:id');
});

module.exports = router;