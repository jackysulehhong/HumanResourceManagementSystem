import mongoose from 'mongoose';

const trainingSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'department',
  },
  title: { type: String },
  description: { type: String },
  fromDate: { type: Date },
  toDate: { type: Date },
  fromTime: { type: String },
  toTime: { type: String },
  duration: { type: Number },
  attendants: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      status: { type: String, default: 'Pending' },
    },
  ],
  trainingType: { type: String },
  status: { type: String },
  organizer: { type: String },
  fee: { type: Number },
  attachments: [],
});

const trainingModel = mongoose.model('training', trainingSchema);

export default trainingModel;
