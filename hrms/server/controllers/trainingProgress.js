import mongoose from 'mongoose';
import moment from 'moment';
import trainingProgressModel from '../models/trainingProgressModel.js';

export const createTrainingProgress = async (req, res) => {
  const trainingProgress = req.body;
  const newTrainingProgress = new trainingProgressModel(trainingProgress);

  newTrainingProgress
    .save()
    .then((result) => {
      return res.status(201).json(newTrainingProgress);
    })
    .catch((error) => {
      return res.status(409).json({ message: error });
    });
};
export const getTrainingProgresses = async (req, res) => {
  try {
    var currentDate = moment().startOf('day');
    const trainingProgresses = await trainingProgressModel
      .find()
      .populate([
        { path: 'user', populate: { path: 'department' } },
        { path: 'training' },
      ])
      .lean()
      .exec((err, items) => {
        const filterItems = items.filter(
          (item) => item.training.toDate < currentDate
        );
        return res.status(200).json(filterItems);
      });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
export const getTrainingProgress = async (req, res) => {
  const { id } = req.params;

  try {
    const trainingProgress = await trainingProgressModel
      .findById(id)
      .populate([
        { path: 'user', populate: { path: 'department' } },
        { path: 'training' },
      ])
      .lean();
    return res.status(200).json(trainingProgress);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const getTrainingProgressUser = async (req, res) => {
  const { id } = req.params;
  var currentDate = moment().startOf('day');

  try {
    const trainingProgress = await trainingProgressModel
      .find({ user: id })
      .populate([
        { path: 'user', populate: { path: 'department' } },
        { path: 'training' },
      ])
      .lean()
      .exec((err, items) => {
        console.log(items);
        const filterItems = items.filter(
          (item) => item.training.toDate < currentDate
        );
        console.log(filterItems);
        return res.status(200).json(filterItems);
      });
    //return res.status(200).json(trainingProgress);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const getTrainingProgressDept = async (req, res) => {
  const { id } = req.params;
  var currentDate = moment().startOf('day');

  try {
    const trainingProgress = await trainingProgressModel
      .aggregate([
        {
          $lookup: {
            from: 'users',
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          },
        },
        { $unwind: '$user' },
        {
          $lookup: {
            from: 'trainings',
            localField: 'training',
            foreignField: '_id',
            as: 'training',
          },
        },
        { $unwind: '$training' },
        {
          $match: {
            'user.department': mongoose.Types.ObjectId(id),
          },
        },
      ])
      .exec((err, items) => {
        const filterItems = items.filter(
          (item) => item.training.toDate < currentDate
        );
        return res.status(200).json(filterItems);
      });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const updateTrainingProgress = async (req, res) => {
  const { id: _id } = req.params;
  const trainingProgress = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No training progress with that id');
  let updatedTrainingProgress;

  if (req.files) {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileId: mongoose.Types.ObjectId(),
        fileName: element.originalname,
        filePath: element.location,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      };

      filesArray.push(file);
    });
    const newFiles = JSON.parse(trainingProgress.attachments).concat(
      filesArray
    );
    updatedTrainingProgress = await trainingProgressModel
      .findByIdAndUpdate(
        _id,
        { ...trainingProgress, attachments: newFiles },
        { new: true }
      )
      .populate([
        { path: 'user', populate: { path: 'department' } },
        { path: 'training' },
      ]);
  } else {
    updatedTrainingProgress = await trainingProgressModel
      .findByIdAndUpdate(_id, { ...trainingProgress }, { new: true })
      .populate([
        { path: 'user', populate: { path: 'department' } },
        { path: 'training' },
      ]);
  }
  console.log(updatedTrainingProgress);
  return res.json(updatedTrainingProgress);
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index]
  );
};
