import { deleteUser } from '../../../services/userService';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const userId = req.query.id;
      const deletedUser = await deleteUser(userId);
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).end();
  }
}