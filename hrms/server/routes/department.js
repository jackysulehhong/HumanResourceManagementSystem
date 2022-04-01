import express from 'express';
import {
  createDept,
  deleteDept,
  getDept,
  getDepts,
  updateDept,
} from '../controllers/department.js';

const router = express.Router();

router.get('/', getDepts);
router.get('/:id', getDept);
router.post('/', createDept);
router.post('/:id', updateDept);
router.delete('/:id', deleteDept);

export default router;
