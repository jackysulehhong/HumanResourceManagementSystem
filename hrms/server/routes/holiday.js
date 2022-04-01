import express from 'express';
import {
  createHoliday,
  deleteHoliday,
  fetchAllHolidays,
  fetchHolidaysByYear,
  getHoliday,
  updateHoliday,
} from '../controllers/holiday.js';

const router = express.Router();

router.get('/', fetchAllHolidays);
router.get('/:year', fetchHolidaysByYear);
router.post('/', createHoliday);
router.post('/:year/:id', updateHoliday);
router.delete('/:year/:id', deleteHoliday);
router.get('/:year/:id', getHoliday);
export default router;
