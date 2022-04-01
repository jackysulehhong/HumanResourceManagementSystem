import mongoose from 'mongoose';
import leaveTypeModel from '../models/leaveTypeModel.js';
import userModel from '../models/userModel.js';

export const getLeaveTypes = async (req, res) => {
  try {
    const leaveTypes = await leaveTypeModel.find();
    res.status(200).json(leaveTypes);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const getLeaveType = async (req, res) => {
  const { id } = req.params;

  try {
    const leaveType = await leaveTypeModel.findById(id);
    res.status(200).json(leaveType);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createLeaveType = async (req, res) => {
  const leaveType = req.body;
  const newLeaveType = new leaveTypeModel(leaveType);
  const exist = await leaveTypeModel.findOne({ code: leaveType.code });
  if (!exist) {
    await newLeaveType.save();
    return res.status(201).json(newLeaveType);
  } else {
    // console.log('?');
    return res.status(409).json({
      message: 'There is already another leave type with same short name',
    });
  }
};
export const updateLeaveType = async (req, res) => {
  const { id: _id } = req.params;
  const leaveType = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No leave with that id');
  const updatedLeaveType = await leaveTypeModel.findByIdAndUpdate(
    _id,
    { ...leaveType, _id },
    { new: true }
  );
  res.json(updatedLeaveType);
};
