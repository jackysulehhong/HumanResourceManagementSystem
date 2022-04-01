import mongoose from 'mongoose';

const deptSchema = mongoose.Schema({
  // code: { type: String, required: true },
  name: { type: String, required: true },
});

const deptModel = mongoose.model('department', deptSchema);

export default deptModel;
