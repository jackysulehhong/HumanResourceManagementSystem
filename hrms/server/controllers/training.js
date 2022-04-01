import mongoose from 'mongoose';
import trainingModel from '../models/trainingModel.js';
import userModel from '../models/userModel.js';
import leaveModel from '../models/leaveModel.js';
import mailer from 'nodemailer';
import holidayModel from '../models/holidayModel.js';
import moment from 'moment';
import trainingProgressModel from '../models/trainingProgressModel.js';
import { io } from '../index.js';
import { sendMail } from '../service/email.js';
import notificationModel from '../models/notificationModel.js';
export const fetchAllTrainings = async (req, res) => {
  try {
    const trainings = await trainingModel
      .find({ trainingType: 'Internal' })
      .populate([{ path: 'user', select: 'first_name last_name' }]);
    res.status(200).json(trainings);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const fetchTrainingById = async (req, res) => {
  const { id } = req.params;

  try {
    const training = await trainingModel.findById(id).populate([
      { path: 'user', select: 'first_name last_name' },
      { path: 'attendants.user', select: 'first_name last_name' },
      { path: 'department', select: 'name' },
    ]);

    res.status(200).json(training);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};

export const createTraining = async (req, res) => {
  const training = req.body;
  // console.log(req.params, req.body);
  // console.log('files', req.files);

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
  const newTraining = new trainingModel({
    ...training,
    attachments: [...filesArray],
  });
  newTraining
    .save()
    .then(async (result) => {
      if (training.trainingType == 'External') {
        await userModel
          .aggregate([
            {
              $lookup: {
                from: 'roles',
                localField: 'roles',
                foreignField: '_id',
                as: 'roles',
              },
            },
            { $unwind: '$roles' },
            {
              $match: {
                $and: [
                  { _id: { $ne: mongoose.Types.ObjectId(training.user) } },
                  {
                    $or: [
                      { 'roles.name': 'admin' },
                      {
                        $and: [
                          { 'roles.name': 'supervisor' },
                          {
                            department: mongoose.Types.ObjectId(
                              training.department
                            ),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            {
              $project: { _id: 1, settings: 1, email: 1 },
            },
          ])
          .exec(async (err, result) => {
            await result.forEach(async ({ _id: id, settings, email }) => {
              const notification = {
                sender: training.user,
                recipient: id,
                content: {
                  id: newTraining._id,
                  message: 'sent a request for external training',
                  type: 'training',
                  status: 'Pending',
                },
              };
              await notificationModel.create(notification);

              io.to(id.toString()).emit('newNotification', {
                ...notification,
                sender: training.user_name,
              });

              if (settings.email) {
                sendMail({
                  type: 'newExternalTraining',
                  sender: training.user_name,
                  email: email,
                  trainingId: notification.content.id,
                });
              }
            });
          });
      }

      return res.status(201).json(newTraining);
    })
    .catch((error) => {
      return res.status(409).json({ message: error });
    });
};
export const updateTraining = async (req, res) => {
  //add internal training attendance
  const { id: _id } = req.params;
  const { user_id, user_name } = req.body;
  var status;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No training with that id');
  const user = await userModel.findById(user_id).populate('department roles');
  if (user.roles.name == 'admin') status = 'Approved';
  else status = 'Pending';
  const updatedTraining = await trainingModel
    .findByIdAndUpdate(
      _id,
      //https://www.codegrepper.com/code-examples/whatever/mongoose+push+to+subarray+if+not+exists
      { $addToSet: { attendants: { user: user_id, status: status } } },
      // { $push: { attendants: user_id } },
      { new: true, upsert: true }
    )
    .populate([
      { path: 'user', select: 'first_name last_name' },
      { path: 'attendants.user', select: 'first_name last_name' },
    ]);
  if (status == 'Approved') {
    const newTrainingProgress = new trainingProgressModel({
      user: user_id,
      training: _id,
    });
    await newTrainingProgress.save();
  }
  if (status == 'Pending') {
    await userModel
      .aggregate([
        {
          $lookup: {
            from: 'roles',
            localField: 'roles',
            foreignField: '_id',
            as: 'roles',
          },
        },
        { $unwind: '$roles' },
        {
          $match: {
            $and: [
              { _id: { $ne: mongoose.Types.ObjectId(user_id) } },
              { 'roles.name': 'admin' },
            ],
          },
        },
        {
          $project: { _id: 1, settings: 1, email: 1 },
        },
      ])
      .exec(async (err, result) => {
        await result.forEach(async ({ _id: id, settings }) => {
          const notification = {
            sender: user_id,
            recipient: id,
            content: {
              id: updatedTraining._id,
              message: 'sent a request to join training',
              type: 'training',
              status: 'Pending',
            },
          };
          await notificationModel.create(notification);

          io.to(id.toString()).emit('newNotification', {
            ...notification,
            sender: user_name,
          });

          if (settings.email) {
            sendMail({
              type: 'joinTraining',
              sender: user_name,
              email: email,
              trainingId: notification.content.id,
            });
          }
        });
      });
  }

  res.json(updatedTraining);
};
export const leaveTraining = async (req, res) => {
  //cancel internal training attendance
  const { id: _id } = req.params;
  const user_id = req.body.user_id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No training with that id');

  const updatedTraining = await trainingModel
    .findByIdAndUpdate(
      _id,
      //https://www.codegrepper.com/code-examples/whatever/mongoose+push+to+subarray+if+not+exists
      { $pull: { attendants: { user: user_id } } },
      // { $push: { attendants: user_id } },
      { new: true, upsert: true }
    )
    .populate([
      { path: 'user', select: 'first_name last_name' },
      { path: 'attendants.user', select: 'first_name last_name' },
    ]);

  const del = await trainingProgressModel.deleteOne({
    user: user_id,
    training: _id,
  });

  res.json(updatedTraining);
};
export const fetchExtTraining = async (req, res) => {
  const role = req.params.role;
  const id = req.params.user;
  const department = req.params.department;
  try {
    let trainings = [{}];
    if (role == 'admin') {
      trainings = await trainingModel
        .find({ trainingType: 'External' })
        .populate([
          { path: 'user', select: 'first_name last_name roles' },
          { path: 'department', select: 'name' },
        ])
        .exec((err, items) => {
          const filterItems = items.filter((item) => item.user._id != id);
          res.status(200).json(filterItems);
        });
    } else if (role == 'supervisor') {
      trainings = await trainingModel
        .find({
          $and: [{ trainingType: 'External' }],
        })
        .populate([
          {
            path: 'user',
            select: 'first_name last_name roles',
            populate: {
              path: 'roles',
              select: 'name',
              //match: { name: { $ne: 'admin' } },
            },
          },
          { path: 'department', select: 'name' },
        ])
        .exec((err, items) => {
          const filterItems = items.filter(
            (item) =>
              item.user.roles.name != 'admin' &&
              item.user._id != id &&
              item.department.name == department
          );
          res.status(200).json(filterItems);
        });
    } else res.status(200).json(trainings);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};
export const updateTrainingStatus = async (req, res) => {
  const { id: _id } = req.params;
  const training = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No training with that id');

  const updatedTraining = await trainingModel
    .findByIdAndUpdate(_id, { ...training, _id }, { new: true })
    .populate([
      { path: 'user', select: 'first_name last_name' },
      { path: 'attendants.user', select: 'first_name last_name' },
      { path: 'department', select: 'name' },
    ]);
  //internal
  if (training.extra) {
    if (training.extra.status == 'Approved') {
      const newTrainingProgress = new trainingProgressModel({
        user: training.extra.user,
        training: _id,
      });
      await newTrainingProgress.save();
    }
    console.log(training.extra.status);
    try {
      await userModel
        .findById(training.extra.user)
        .lean()
        .exec(async (err, result) => {
          const notification = {
            sender: training.approver,
            recipient: training.extra.user,
            content: {
              id: _id,
              message: `${training.extra.status} your join training request`,
              type: 'training',
              status: training.extra.status,
            },
          };
          await notificationModel.create(notification);
          io.to(training.extra.user.toString()).emit('newNotification', {
            ...notification,
            sender: training.user_name,
          });

          if (result.settings.email) {
            sendMail({
              type: 'joinTrainingApproval',
              sender: training.user_name,
              email: result.email,
              trainingId: notification.content.id,
              status: training.extra.status,
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  } else {
    //external
    try {
      await userModel
        .findById(updatedTraining.user._id)
        .lean()
        .exec(async (err, result) => {
          const notification = {
            sender: training.approver,
            recipient: updatedTraining.user._id,
            content: {
              id: _id,
              message: `${training.status} your training request`,
              type: 'training',
              status: training.status,
            },
          };
          await notificationModel.create(notification);
          io.to(updatedTraining.user._id.toString()).emit('newNotification', {
            ...notification,
            sender: training.user_name,
          });

          if (result.settings.email) {
            sendMail({
              type: 'externalTrainingApproval',
              sender: training.user_name,
              leaveId: notification.content.id,
              email: result.email,
              status: training.status,
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  return res.json(updatedTraining);
};
export const fetchExtTrainingHistory = async (req, res) => {
  const { id } = req.params;

  try {
    const trainings = await trainingModel
      .find({ $and: [{ trainingType: 'External' }, { user: id }] })
      .populate([
        { path: 'user', select: 'first_name last_name roles' },
        { path: 'department', select: 'name' },
      ]);
    res.status(200).json(trainings);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const fetchTrainingHistory = async (req, res) => {
  const { id } = req.params;

  try {
    const trainings = await trainingModel
      .find({
        $and: [
          { trainingType: 'Internal' },
          { attendants: { $elemMatch: { user: id } } },
        ],
      })
      .populate([
        { path: 'user', select: 'first_name last_name roles' },
        { path: 'department', select: 'name' },
      ]);
    res.status(200).json(trainings);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const fetchUpcomingTraining = async (req, res) => {
  const { id } = req.params;
  var currentDate = moment().startOf('day');
  var date7Days = moment(currentDate).add(7, 'days');

  try {
    const trainings = await trainingModel
      .find({
        $and: [
          {
            $or: [
              { attendants: { $elemMatch: { user: id, status: 'Approved' } } },
              { $and: [{ user: id }, { status: 'Approved' }] },
            ],
          },
          { fromDate: { $gte: currentDate } },
          { fromDate: { $lte: date7Days } },
        ],
      })
      .populate([
        { path: 'user', select: 'first_name last_name roles' },
        { path: 'department', select: 'name' },
      ]);
    var limit2 = trainings.slice(0, 2);
    res.status(200).json(limit2);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const fetchTodayTrainings = async (req, res) => {
  var currentDate = moment().startOf('day');
  var next1Day = moment(currentDate).add(1, 'day');

  try {
    const trainings = await trainingModel
      .find({
        $and: [
          { trainingType: 'Internal' },
          { fromDate: { $lte: currentDate } },
          { toDate: { $gte: currentDate } },
        ],
      })
      .populate([
        { path: 'user', select: 'first_name last_name roles' },
        { path: 'department', select: 'name' },
      ]);
    res.status(200).json(trainings);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const fetchTrainingCount = async (req, res) => {
  try {
    const trainings = await trainingModel.aggregate([
      {
        $match: {
          $and: [{ trainingType: 'External' }, { status: 'Approved' }],
        },
      },
      {
        $group: {
          _id: '$department',
          trainings: { $addToSet: '$_id' },
        },
      },
      {
        $unwind: '$trainings',
      },
      {
        $group: { _id: '$_id', count: { $sum: 1 } },
      },
      {
        $project: {
          _id: 0,
          department: '$_id',
          count: 1,
        },
      },
    ]);
    trainingModel.populate(
      trainings,
      {
        path: 'department',
      },
      (err, result) => {
        res.status(200).json(result);
      }
    );
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
//https://github.com/Musawirkhann/Nodejs_Mongodb_Express_Multer/blob/main/serverproject/controllers/fileuploaderController.js
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
