import express from 'express';
import { UserService } from './UserService.js';

const router = express.Router();

router.post('/api/1.0/users', async (req, res) => {
  await UserService.save(req.body);
  return res.status(200).send({ message: 'User created' });
});

export { router as UserRouter };
