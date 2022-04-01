import express from 'express';
import {
  signIn,
  signUp,
  createUser,
  getUser,
  getUsers,
  updateUser,
  resetPassword,
  fetchDeptUsers,
  changePassword,
  updateAuth,
  updateSettings,
} from '../controllers/users.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.post('/signIn', signIn);
router.post('/signUp', signUp);
router.post('/', createUser);
router.post('/resetPassword', resetPassword);
router.post('/:id/changePassword', changePassword);
router.get('/updateAuth/:id', updateAuth);
router.post('/updateSettings/:id', updateSettings);
router.get('/', auth, getUsers);
router.get('/:id', auth, getUser);
router.patch('/:id', auth, updateUser);
router.get('/dept/:department', auth, fetchDeptUsers);

export default router;
