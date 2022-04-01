import mongoose from 'mongoose';
//https://stackoverflow.com/questions/42019679/object-type-in-mongoose/43064841
const UserSchema = mongoose.Schema({
  emp_id: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  employment_date: { type: Date, required: true },
  password: { type: String, required: true },
  leaveCount: [
    {
      leaveType: { type: mongoose.Schema.Types.ObjectId, ref: 'leaveType' },
      count: { type: Number },
    },
  ],
  trainingHours: { type: Number, default: 60 },
  completedHours: { type: Number, default: 0 },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'department',
    required: true,
  },
  settings: {
    email: { type: Boolean, default: true },
    notification: { type: Boolean, default: false },
  },
  policy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'policy',
  },
  /*
  position: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'position',
    required: true,
  },*/
  roles: { type: mongoose.Schema.Types.ObjectId, ref: 'roles', required: true },
  id: { type: String },
});

const userModel = mongoose.model('User', UserSchema);

export default userModel;
