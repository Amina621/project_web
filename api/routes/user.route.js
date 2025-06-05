import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

// Route GET /test
router.get('/test', test);

export default router;
