const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  myFile: String,
});

const Post = mongoose.model("post_image", postSchema);

module.exports = Post;