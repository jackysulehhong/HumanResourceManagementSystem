import mongoose from 'mongoose';

const notificationSchema = mongoose.Schema(
  {
    content: {
      id: { type: String, required: true }, //notification link to refer to
      message: { type: String, required: true },
      status: { type: String, required: true }, //notification type reminder/status
      type: { type: String, required: true }, //training/ leave
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    read: { type: Boolean, default: false }, //notification status
  },
  { timestamps: true }
);

const notificationModel = mongoose.model('notification', notificationSchema);

export default notificationModel;
