import express from 'express';
import leavesRoutes from './leaves.js';
import userRoutes from './users.js';
import deptRoutes from './department.js';
import leaveTypesRoutes from './leaveType.js';
import rolesRoutes from './roles.js';
import holidayRoutes from './holiday.js';
import trainingRoutes from './training.js';
import trainingProgressRoutes from './trainingProgress.js';
import policyRoutes from './policy.js';
import notificationRoutes from './notification.js';
const router = express.Router();

router.use('/leaves', leavesRoutes);
router.use('/users', userRoutes);
router.use('/depts', deptRoutes);
router.use('/leaveTypes', leaveTypesRoutes);
router.use('/roles', rolesRoutes);
router.use('/holidays', holidayRoutes);
router.use('/training', trainingRoutes);
router.use('/trainingProgress', trainingProgressRoutes);
router.use('/policy', policyRoutes);
router.use('/notification', notificationRoutes);

export default router;
