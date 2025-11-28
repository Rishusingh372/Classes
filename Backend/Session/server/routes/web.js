import express from 'express';
const router = express.Router();
import Mysession from '../controllers/sessionController.js';

router.get('/session', Mysession.get_session);


export default router;