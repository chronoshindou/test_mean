const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let CommentSchema = new Schema({
    content: {type: String},
    who: {type: String},
    date: {type: Date, default: Date.now}
});
module.exports = mongoose.model('Comment', CommentSchema);