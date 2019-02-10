const Post = require('../models/post.model');
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.dynamic_view_all = function (req, res, next) {

    Post.find(function (err, post) {
        if (err) return next(err);
        // res.send(post);
        res.render('dynamic', {
            data: post,
            name: post[2].title, 
            url:"http://www.tutorialspoint.com",
            content: post[2].post_content
         });
    });


};

exports.dynamic_view = function (req, res, next) {
    Post.findById(req.params.id, function (err, post, ) {
        if (err) return next(err);
        res.render('dynamic_id', {
            name: post.title,
            url: "http://www.tutorialspoint.com",
            content: post.post_content
        });
    });


};
exports.post_create = function (req, res) {
    let post = new Post({
        title: req.body.title,
        post_content: req.body.post_content,
        who: req.body.who
    });

    post.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Post Created successfully')
    })
};

exports.post_details = function (req, res, next) {
    Post.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.send(post);
    });
};

exports.post_all = function (req, res) {
    Post.find(function (err, post) {
        if (err) return next(err);
        res.send(post);
    });
};

exports.post_update = function (req, res) {
    Post.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, function (err, post) {
        if (err) return next(err);
        res.send('Post updated.');
    });
};

exports.post_delete = function (req, res) {
    Post.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};