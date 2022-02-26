const Video = require('../models/Video');

exports.getAboutPage = (req, res) => {
    res.render('about');
};
exports.getAddPage = (req, res) => {
    res.render('add');
};

exports.getEditPage = async (req, res) => {
    const video = await Video.findOne({ _id: req.params.id });
    res.render('edit', {
        video,
    });
};