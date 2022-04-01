import express from 'express';
import auth from '../middleware/auth.js';
import {
  createRole,
  getRole,
  getRoles,
  updateRole,
} from '../controllers/roles.js';
const router = express.Router();

router.post('/', auth, createRole);
router.get('/', auth, getRoles);
router.get('/:id', auth, getRole);
router.patch('/:id', auth, updateRole);

export default router;
