import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import policyModel from '../models/policyModel.js';

export const createPolicy = async (req, res) => {
  const policy = req.body;
  const newPolicy = new policyModel(policy);
  newPolicy
    .save()
    .then((result) => {
      return res.status(201).json(newPolicy);
    })
    .catch((error) => {
      return res.status(409).json({ message: error });
    });
};
export const getPolicies = async (req, res) => {
  try {
    const policies = await policyModel
      .find()
      .populate('departments lists.leavetype')
      .lean();

    res.status(200).json(policies);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const getPoliciesByDept = async (req, res) => {
  const { id } = req.params;
  try {
    const policies = await policyModel
      .find({ departments: mongoose.Types.ObjectId(id) })
      .populate('lists.leavetype')
      .lean();

    res.status(200).json(policies);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};
export const getPolicy = async (req, res) => {
  const { id } = req.params;

  try {
    const policy = await policyModel.findById(id);

    res.status(200).json(policy);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const updatePolicy = async (req, res) => {
  const { id: _id } = req.params;
  const policy = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No leave with that id');
  const updatedPolicy = await policyModel.findByIdAndUpdate(
    _id,
    { ...policy, _id },
    { new: true }
  );
  res.json(updatedPolicy);
};
