import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Router } from 'express';
import User from './models/User';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    const message = (error as Error).message;
    res.status(500).json({ error: message });
  }
});

router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
        const message = (error as Error).message;
        res.status(500).json({ error: message })
    }
  });

export default router;
