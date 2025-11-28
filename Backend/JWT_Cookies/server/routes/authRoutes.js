import express from 'express';
import {
  register,
  login,
  logout,
  getMe,
  getProtectedData
} from '../controllers/authController.js';
import { authenticateToken, checkExistingAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', checkExistingAuth, register);
router.post('/login', checkExistingAuth, login);

// Protected routes
router.post('/logout', authenticateToken, logout);
router.get('/me', authenticateToken, getMe);
router.get('/protected', authenticateToken, getProtectedData);

export default router;