const BlogModel = require('../models/blogModel');

async function createBlog(blogData) {
  try {
    const newBlog = await BlogModel.create(blogData);
    return newBlog;
  } catch (error) {
    throw new Error('Error creating blog');
  }
}


async function getBlogById(blogId) {
  try {
    const blog = await BlogModel.findById(blogId).populate('userID');
    if (!blog) {
      throw new Error('Blog not found');
    }
    return blog;
  } catch (error) {
    throw new Error('Error fetching blog');
  }
}



async function updateBlog(blogId, newData) {
  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, newData, { new: true });
    return updatedBlog;
  } catch (error) {
    throw new Error('Error updating blog');
  }
}

async function deleteBlog(blogId) {
  try {
    const deletedBlog = await BlogModel.findByIdAndDelete(blogId);
    return deletedBlog;
  } catch (error) {
    throw new Error('Error deleting blog');
  }
}

module.exports = { createBlog, getBlogById, updateBlog, deleteBlog };
