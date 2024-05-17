import { deleteBlog } from '../../../services/blogService';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const blogId = req.query.id;
      const deletedBlog = await deleteBlog(blogId);
      res.status(200).json(deletedBlog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).end();
  }
}
