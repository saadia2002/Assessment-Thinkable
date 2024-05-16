import { getUserById } from '../../../services/userService';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const userId = req.query.id;
      const user = await getUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).end();
  }
}