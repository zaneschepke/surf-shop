const express = require('express');
const router = express.Router();
const multer = require('multer');
//setting temp uploads directory
const upload = multer({'dest': 'uploads/'});
const {
    asyncErrorHandler
} = require('../middleware/index');
const {
    postIndex,
    postNew,
    postCreate,
    postShow,
    postEdit,
    postUpdate,
    postDestroy
} = require('../controllers/posts')
/* GET home posts index /posts */
router.get('/', asyncErrorHandler(postIndex));

/* GET get form for new post /posts/new */
// New route before show route
router.get('/new', postNew);

/* POST for create new post */
router.post('/', upload.array('images', 4), asyncErrorHandler(postCreate));

/* GET posts show /posts/:id */
router.get('/:id', asyncErrorHandler(postShow));

/* GET posts edit for new post /posts/:id/edit */
router.get('/:id/edit', asyncErrorHandler(postEdit));

/* PUT posts update /posts/:id*/
router.put('/:id', upload.array('images', 4), asyncErrorHandler(postUpdate));

/* DELETE posts remove /posts/:id*/
router.delete('/:id', asyncErrorHandler(postDestroy));

module.exports = router;