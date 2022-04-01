import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import notificationModel from '../models/notificationModel.js';

export const getNotificationsById = async (req, res) => {
  const { id } = req.params;
  try {
    const notifications = await notificationModel
      .find({
        recipient: mongoose.Types.ObjectId(id),
      })
      .sort('-createdAt')
      .populate('sender');
    res.status(200).json(notifications);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const clearNotificationsByType = async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;
  // console.log(type);
  try {
    const notifications = await notificationModel.deleteMany({
      $and: [
        { recipient: mongoose.Types.ObjectId(id) },
        { 'content.type': type },
      ],
    });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const setNotificationRead = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await notificationModel.findByIdAndUpdate(
      {
        _id: mongoose.Types.ObjectId(id),
      },
      { read: true },
      { new: true }
    );
    res.status(200).json(notification);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
