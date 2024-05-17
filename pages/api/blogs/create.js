import { createBlog } from '../../../services/blogService';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const newBlog = await createBlog(req.body);
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).end();
  }
}
