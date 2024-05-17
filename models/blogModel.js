const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  soutitre: { type: String, required: false },
  description: { type: String, required: true },
  dateDeCreation: { type: Date, default: Date.now },
  images: { type: [Buffer], required: false },
});

const BlogModel = mongoose.model('Blog', blogSchema);

module.exports = BlogModel;
