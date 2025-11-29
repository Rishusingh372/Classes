import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', userController.profile);
router.post('/logout', userController.logout);

export default router;