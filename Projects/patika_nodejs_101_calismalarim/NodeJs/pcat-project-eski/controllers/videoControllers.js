const Video = require('../models/Video');
const fs = require('fs');



exports.getAllPhotos = async (req, res) => {
    const page = req.query.page || 1;                        // Başlangıç sayfamız veya ilk sayfamız.
    const photosPerPage = 2;                                 // Her sayfada bulunan fotoğraf sayısı
    const totalPhotos = await Video.find().countDocuments(); // Toplam fotoğraf sayısı

    const videos = await Video.find({})                      // Fotoğrafları alıyoruz  
        .sort('-dateCreated')                                    // Fotoğrafları sıralıyoruz
        .skip((page - 1) * photosPerPage)                          // Her sayfanın kendi fotoğrafları
        .limit(photosPerPage)                                    // Her sayfada olmasını istediğimi F. sayısını sınırlıyoruz.

    res.render('index', {
        videos: videos,
        current: page,
        pages: Math.ceil(totalPhotos / photosPerPage)
    });
};

exports.getPhoto = async (req, res) => {
    const video = await Video.findById(req.params.id);
    res.render('video-page', {
        video,
    });
};

exports.createPhoto = async (req, res) => {
    const uploadDir = 'public/uploads';

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }

    let uploadeImage = req.files.image;
    let uploadPath = __dirname + '/../public/uploads/' + uploadeImage.name;

    uploadeImage.mv(uploadPath, async () => {
        await Video.create({
            ...req.body,
            image: '/uploads/' + uploadeImage.name,
        });
        res.redirect('/');
    });
};

exports.updatePhoto = async (req, res) => {
    const video = await Video.findOne({ _id: req.params.id });
    video.title = req.body.title;
    video.description = req.body.description;
    await video.save();

    res.redirect(`/videos/${req.params.id}`);
};

exports.deletePhoto = async (req, res) => {
    const video = await Video.findOne({ _id: req.params.id });
    let deletedImage = __dirname + '/../public' + video.image;
    fs.unlinkSync(deletedImage);
    await Video.findByIdAndRemove(req.params.id);
    res.redirect('/');
};