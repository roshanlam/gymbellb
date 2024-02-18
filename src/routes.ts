// routes/authRoutes.ts
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import MainUserModel from './models/User';

dotenv.config();
const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, name, sex, country, age_range, focus, nutrition, level } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new MainUserModel({ email, name, sex, country, age_range, focus, nutrition, level, password: hashedPassword});
        await newUser.save();
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Login endpoint
router.post('/login', async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await MainUserModel.findOne({ name });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '24h' });
        res.status(200).send({ token });
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
