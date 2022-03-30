const Post = require('../models/Post');
const fs = require('fs');

exports.getAllPosts = async (req, res) => {
    const page = req.query.page || 1;                        // Başlangıç sayfamız veya ilk sayfamız.
    const postsPerPage = 12;                                 // Her sayfada bulunan fotoğraf sayısı
    const totalPosts = await Post.find().countDocuments(); // Toplam fotoğraf sayısı

    const posts = await Post.find({})                      // Fotoğrafları alıyoruz  
        .sort('-dateCreated')                                    // Fotoğrafları sıralıyoruz
        .skip((page - 1) * postsPerPage)                          // Her sayfanın kendi fotoğrafları
        .limit(postsPerPage)                                    // Her sayfada olmasını istediğimi F. sayısını sınırlıyoruz.

    res.render('index', {
        posts: posts,
        current: page,
        pages: Math.ceil(totalPosts / postsPerPage)
    });
};

exports.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', {
        post,
    });
};

exports.createPost = async (req, res) => {
    const uploadDir = 'public/uploads';

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }

    let uploadeImage = req.files.image;
    let uploadPath = __dirname + '/../public/uploads/' + uploadeImage.name;

    uploadeImage.mv(uploadPath, async () => {
        await Post.create({
            ...req.body,
            image: '/uploads/' + uploadeImage.name,
        });
        res.redirect('/');
    });
};

exports.updatePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    post.title = req.body.title;
    post.detail = req.body.detail;
    await post.save();

    res.redirect(`/posts/${req.params.id}`);
};

exports.deletePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    let deletedImage = __dirname + '/../public' + post.image;
    fs.unlinkSync(deletedImage);
    await Post.findByIdAndRemove(req.params.id);
    res.redirect('/');
};