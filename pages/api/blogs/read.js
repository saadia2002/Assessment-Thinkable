import { getBlogById } from '../../../services/blogService';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const blogId = req.query.id;
      const blog = await getBlogById(blogId);
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).end();
  }
}
