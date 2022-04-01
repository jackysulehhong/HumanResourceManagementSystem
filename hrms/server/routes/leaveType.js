import express from 'express';
import {
  createLeaveType,
  getLeaveType,
  getLeaveTypes,
  updateLeaveType,
} from '../controllers/leaveType.js';

import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', auth, getLeaveTypes);
router.get('/:id', auth, getLeaveType);
router.post('/', auth, createLeaveType);
router.patch('/:id', auth, updateLeaveType);

export default router;
