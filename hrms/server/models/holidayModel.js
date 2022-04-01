import mongoose from 'mongoose';

const holidaySchema = mongoose.Schema({
  year: { type: String, required: true },
  lists: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true },
      title: { type: String, required: true },
      description: { type: String, default: '' },
    },
  ],
});

const holidayModel = mongoose.model('holiday', holidaySchema);

export default holidayModel;
