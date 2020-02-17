const express = require('express');
//allows us to view post id with mergeParams
const router = express.Router({ mergeParams: true });

/* GET home posts index /posts/:id/reviews */
router.get('/', (req, res, next) => {
    res.send('/posts/:id/reviews');
});

/* POST for create new review */
router.post('/', (req, res, next) => {
    res.send('CREATE /posts/:id/reviews');
});

/* GET reviews edit for new review /posts/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/reviews/:review_id/edit');
});

/* PUT reviews update /posts/:id/reviews/:review_id*/
router.put('/:review_id', (req, res, next) => {
    res.send('PUT /posts/:id/reviews/:review_id');
});

/* DELETE reviews remove /posts/:id/reviews/:review_id*/
router.delete('/:review_id', (req, res, next) => {
    res.send('REMOVE /posts/:id/reviews/:review_id');
});

module.exports = router;