const Post = require('../models/post');
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});


module.exports = { 
    async postIndex(req, res, next) {
        let posts = await Post.find({})
        res.render('posts/index', { posts });
    },

    postNew(req, res, next) {
        res.render('posts/new');
    },

    async postCreate(req, res, next) {
        req.body.post.images = [];
        for(const file of req.files) {
            let image = await cloudinary.v2.uploader.upload(file.path);
            req.body.post.images.push({
                url: image.secure_url,
                public_id: image.public_id
            });
        }
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
        let post = await Post.findById(req.params.id);
        if(req.body.deleteImages && req.body.deleteImages.length) {
            let deleteImages = req.body.deleteImages;
            for(public_id of deleteImages) {
                await cloudinary.v2.uploader.destroy(public_id);
                for(image of post.images) {
                    //delete images from local db
                    if(image.public_id === public_id) {
                        let index = post.images.indexOf(image);
                        post.images.splice(index,1);
                    }
                }
            }
        }
        if(req.files) {
            for(const file of req.files) {
                let image = await cloudinary.v2.uploader.upload(file.path);
                post.images.push({
                    url: image.secure_url,
                    public_id: image.public_id
                });
            }
        }
        post.title = req.body.post.title;
        post.description = req.body.post.description;
        post.price = req.body.post.description;
        post.location = req.body.post.location;
        post.save();

        res.redirect(`/posts/${post.id}`);
    },
    async postDestroy(req, res, next) {
        let post = await Post.findByIdAndDelete(req.params.id);
        for(const image of post.images) {
            await cloudinary.v2.uploader.destroy(image.public_id);
        }
        await post.remove();
        res.redirect('/posts');
    }
}