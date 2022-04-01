import deptModel from '../models/deptModel.js';
import mongoose from 'mongoose';

export const getDepts = async (req, res) => {
  try {
    const depts = await deptModel.find();
    res.status(200).json(depts);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const getDept = async (req, res) => {
  const { id } = req.params;

  try {
    const dept = await deptModel.findById(id);
    res.status(200).json(dept);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const createDept = async (req, res) => {
  const dept = req.body;
  const newDept = new deptModel(dept);
  newDept
    .save()
    .then((result) => {
      return res.status(201).json(newDept);
    })
    .catch((error) => {
      return res.status(409).json({ message: error });
    });
};

export const updateDept = async (req, res) => {
  const { id: _id } = req.params;
  const dept = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No dept with that id');
  const updatedDept = await deptModel.findByIdAndUpdate(
    _id,
    { ...dept, _id },
    { new: true }
  );
  //  console.log(updatedDept);
  res.json(updatedDept);
};

export const deleteDept = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No post with that id');

  await deptModel.findByIdAndRemove(_id);

  res.json({ message: 'Post deleted successfully' });
};
