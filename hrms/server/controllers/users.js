import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import passwordGenerator from 'generate-password';

import userModel from '../models/userModel.js';
import { sendMail } from '../service/email.js';
import dotenv from 'dotenv';
import leaveModel from '../models/leaveModel.js';
import trainingModel from '../models/trainingModel.js';
dotenv.config();
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel
      .findOne({ email })
      .populate('department roles leaveCount.leaveType');
    if (!existingUser)
      return res.status(401).json({ message: 'Invalid credentials' });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const signUp = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'User already exist' });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await userModel.create({
      email,
      password: hashedPassword,
      name,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRY,
      }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createUser = async (req, res) => {
  const staff = req.body;
  try {
    const existingUser = await userModel.findOne({ email: staff.email });
    if (existingUser)
      return res.status(400).json({ message: 'Email already exist' });

    const newPassword = passwordGenerator.generate({
      numbers: true,
      symbols: true,
    });
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    const result = await userModel.create({
      ...staff,
      password: hashedPassword,
    });
    await sendMail({
      type: 'createUser',
      email: staff.email,
      password: newPassword,
    });
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRY,
      }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const getUsers = async (req, res) => {
  try {
    const users = await userModel
      .find()
      .populate('department roles leaveCount.leaveType');
    res.status(200).json(users);
  } catch (error) {
    console.log(err);
    res.status(404).json({ message: error });
  }
};
export const getUser = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const user = await userModel
      .findById(_id)
      .populate('department roles leaveCount.leaveType policy')
      .lean();

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const updateUser = async (req, res) => {
  const { id: _id } = req.params;
  const user = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No leave with that id');
  //const updatedUser = await userModel.find({});
  const updatedUser = await userModel
    .findByIdAndUpdate(_id, { ...user, _id }, { new: true })
    .populate([
      //  { path: 'user', select: 'first_name last_name' },
      { path: 'department', select: 'name' },
      { path: 'roles' },
      { path: 'leaveCount.leaveType' },
    ]);
  if (user.extra?.department && user.extra?.department != user.department) {
    try {
      await leaveModel.updateMany(
        { user: mongoose.Types.ObjectId(_id) },
        { department: user.extra.department }
      );
      await trainingModel.updateMany(
        { user: mongoose.Types.ObjectId(_id) },
        { department: user.extra.department }
      );
    } catch (error) {
      console.log(error);
    }
  }
  res.json(updatedUser);
};

export const resetPassword = async (req, res) => {
  const { email } = req.body;
  const newPassword = passwordGenerator.generate({
    numbers: true,
    symbols: true,
  });
  const hashedPassword = await bcrypt.hash(newPassword, 12);

  const updatedUser = await userModel.findOneAndUpdate(
    { email },
    { password: hashedPassword },
    { new: true }
  );
  console.log(updatedUser);
  if (updatedUser) {
    await sendMail({ type: 'resetPassword', email, password: newPassword });
    return res.json(updatedUser);
  }
  //const updatedUser = await userModel.findOne({ email });
  //console.log(updatedUser);
  return res.status(404).json({ message: 'No user found with that email' });
};

export const fetchDeptUsers = async (req, res) => {
  const { department } = req.params;

  try {
    const users = await userModel
      .find({ department: department })
      .populate([
        { path: 'department', select: 'name' },
        { path: 'roles', select: 'name' },
        { path: 'leaveCount.leaveType' },
      ])
      .lean();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const changePassword = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  // await sendMail({ type: 'resetPassword', email, password: newPassword });
  const hashedPassword = await bcrypt.hash(password, 12);
  const updatedUser = await userModel.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(id) },
    { password: hashedPassword },
    { new: true }
  );
  //const updatedUser = await userModel.findOne({ email });
  //console.log(updatedUser);
  res.json(updatedUser);
};

export const updateAuth = async (req, res) => {
  const { id } = req.params;

  // await sendMail({ type: 'resetPassword', email, password: newPassword });

  const user = await userModel
    .findOne({ _id: mongoose.Types.ObjectId(id) })
    .populate([
      { path: 'department', select: 'name' },
      { path: 'roles', select: 'name' },
      { path: 'leaveCount.leaveType' },
    ])
    .lean();
  //const updatedUser = await userModel.findOne({ email });
  //console.log(updatedUser);
  res.json(user);
};

export const updateSettings = async (req, res) => {
  const { id } = req.params;
  const settings = req.body;

  const user = await userModel.findByIdAndUpdate(
    { _id: mongoose.Types.ObjectId(id) },
    { settings },
    { new: true }
  );

  res.status(200).json(user);
};
