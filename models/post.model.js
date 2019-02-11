const mongoose = require('mongoose');
const Comment = require('./post.model');
const Schema = mongoose.Schema;
// let CommentSchema = new Schema({
//     content: {type: String},
//     who: {type: String}
// });
let PostSchema = new Schema({
    title: {type: String, required: true},
    post_content: {type: String, required: true},
    who: {type: String, required: true},
    when: {type: Date},
    comments: [Comment],
    imageUrl: {type: String}
});


// Export the model
module.exports = mongoose.model('Post', PostSchema);
// module.exports = mongoose.model('Comment', CommentSchema);