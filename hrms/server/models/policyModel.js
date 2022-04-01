import mongoose from 'mongoose';

const policySchema = mongoose.Schema({
  name: { type: String, required: true },
  departments: [{ type: mongoose.Types.ObjectId, ref: 'department' }],
  lists: [
    {
      stacked: { type: Boolean },
      leavetype: [{ type: mongoose.Types.ObjectId, ref: 'leaveType' }],
      policy: [],
    },
  ],
});

const policyModel = mongoose.model('policy', policySchema);

export default policyModel;
