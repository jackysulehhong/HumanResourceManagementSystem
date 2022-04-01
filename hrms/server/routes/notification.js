import express from 'express';
import {
  clearNotificationsByType,
  getNotificationsById,
  setNotificationRead,
} from '../controllers/notification.js';

const router = express.Router();

router.get('/:id', getNotificationsById);
router.post('/:id', clearNotificationsByType);
router.post('/read/:id', setNotificationRead);
export default router;
