import { createUser } from '../../../services/userService';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const newUser = await createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).end();
  }
}