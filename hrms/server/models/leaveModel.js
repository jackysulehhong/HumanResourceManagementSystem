import mongoose from 'mongoose';

const leaveSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'department',
    required: true,
  },
  reason: { type: String },
  leaveType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'leaveType',
    required: true,
  },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  status: { type: String, default: 'Pending' },
  attachments: [],
});
const leaveModel = mongoose.model('leave', leaveSchema);

export default leaveModel;
