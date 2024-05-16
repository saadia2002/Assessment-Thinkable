import { updateUser } from '../../../services/userService';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const userId = req.query.id;
      const updatedUser = await updateUser(userId, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).end();
  }
}