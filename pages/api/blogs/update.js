import { updateBlog } from '../../../services/blogService';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const blogId = req.query.id;
      const updatedBlog = await updateBlog(blogId, req.body);
      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).end();
  }
}
