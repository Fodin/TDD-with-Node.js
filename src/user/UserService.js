import { User } from './User.js';
import bcrypt from 'bcrypt';

const save = async (body) => {
  const hash = await bcrypt.hash(body.password, 10);
  const user = { ...body, password: hash };
  await User.create(user);
};

const UserService = { save };

export { UserService };
