const Post = require('../models/post');

module.exports = { 
    async postIndex(req, res, next) {
        let posts = await Post.find({})
        res.render('posts/index', { posts });
    },

    postNew(req, res, next) {
        res.render('posts/new');
    },

    async postCreate(req, res, next) {
        let post = await Post.create(req.body.post);
        res.redirect(`/posts/${post.id}`);
    },

    async postShow(req, res, next) {
        let post = await Post.findById(req.params.id);
        res.render('posts/show', { post });
    },
    //Posts edit
    async postEdit(req, res, next) {
        let post = await Post.findById(req.params.id);
        res.render('posts/edit', { post });
    }, 
    //Post Update
    async postUpdate(req, res, next) {
        let post = await Post.findByIdAndUpdate(req.params.id, req.body.post);
        res.redirect(`/posts/${post.id}`);
    },
    async postDestroy(req, res, next) {
        await Post.findByIdAndDelete(req.params.id);
        res.redirect('/posts');
    }
}