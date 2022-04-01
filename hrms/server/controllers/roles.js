import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import rolesModel from '../models/rolesModel.js';

export const createRole = async (req, res) => {
  const role = req.body;
  const newRole = new rolesModel(role);

  newRole
    .save()
    .then((result) => {
      return res.status(201).json(newRole);
    })
    .catch((error) => {
      return res.status(409).json({ message: error });
    });
};
export const getRoles = async (req, res) => {
  try {
    const roles = await rolesModel.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const getRole = async (req, res) => {
  const { id } = req.params;

  try {
    const role = await rolesModel.findById(id);
    res.status(200).json(role);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const updateRole = async (req, res) => {
  const { id: _id } = req.params;
  const role = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No leave with that id');
  const updatedRole = await rolesModel.findByIdAndUpdate(
    _id,
    { ...role, _id },
    { new: true }
  );
  res.json(updatedRole);
};
