import express from 'express';
import {
  createTraining,
  fetchAllTrainings,
  fetchTrainingById,
  updateTraining,
  leaveTraining,
  fetchExtTraining,
  updateTrainingStatus,
  fetchExtTrainingHistory,
  fetchTrainingHistory,
  fetchUpcomingTraining,
  fetchTodayTrainings,
  fetchTrainingCount,
} from '../controllers/training.js';
import auth from '../middleware/auth.js';
import upload from '../middleware/filehelpers3.cjs';
const router = express.Router();

router.get('/', auth, fetchAllTrainings);
router.get('/:id', auth, fetchTrainingById);
router.get('/ext/:role/:user/:department', auth, fetchExtTraining);
router.post('/', [auth, upload.array('files')], createTraining);
router.post('/:id', auth, updateTraining);
router.patch('/:id', auth, leaveTraining);
router.post('/ext/:id', auth, updateTrainingStatus);
router.get('/history/ext/:id', auth, fetchExtTrainingHistory);
router.get('/history/:id', auth, fetchTrainingHistory);
router.get('/upcoming/:id', auth, fetchUpcomingTraining);
router.get('/date/today', auth, fetchTodayTrainings);
router.get('/count/dept', auth, fetchTrainingCount);

export default router;
