import express from 'express';
import {
  createTrainingProgress,
  getTrainingProgress,
  getTrainingProgressDept,
  getTrainingProgresses,
  getTrainingProgressUser,
  updateTrainingProgress,
} from '../controllers/trainingProgress.js';
import auth from '../middleware/auth.js';
import upload from '../middleware/filehelpers3.cjs';
const router = express.Router();

router.get('/', auth, getTrainingProgresses);
router.get('/:id', auth, getTrainingProgress);
router.post('/', auth, createTrainingProgress);
router.post('/:id', [auth, upload.array('files')], updateTrainingProgress);
router.get('/user/:id', auth, getTrainingProgressUser);
router.get('/dept/:id', auth, getTrainingProgressDept);

export default router;
