import mongoose from 'mongoose';
import leaveModel from '../models/leaveModel.js';
import mailer from 'nodemailer';
import holidayModel from '../models/holidayModel.js';
import moment from 'moment';
import userModel from '../models/userModel.js';
import notificationModel from '../models/notificationModel.js';
import { beamsClient, io } from '../index.js';
import { sendMail } from '../service/email.js';
export const fetchAllLeaves = async (req, res) => {
  try {
    const leaves = await leaveModel
      .find()
      .populate([
        { path: 'user', select: 'first_name last_name' },
        { path: 'department', select: 'name' },
        { path: 'leaveType' },
      ]);
    res.status(200).json(leaves);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const fetchLeaveById = async (req, res) => {
  const { id } = req.params;
  try {
    const leave = await leaveModel
      .findById(id)
      .populate([
        { path: 'user', select: 'first_name last_name' },
        { path: 'department', select: 'name' },
        { path: 'leaveType' },
      ]);
    //   console.log(leave);
    res.status(200).json(leave);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};

export const createLeave = async (req, res) => {
  const leave = req.body;

  // console.log('files', req.files);
  let filesArray = [];

  try {
    req.files.forEach((element) => {
      const file = {
        fileId: mongoose.Types.ObjectId(),
        fileName: element.originalname,
        filePath: element.location,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      };
      console.log('1', element);
      filesArray.push(file);
    });

    const newLeave = new leaveModel({
      ...leave,
      attachments: [...filesArray],
    });

    await newLeave
      .save()
      .then(async (result) => {
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
                  { _id: { $ne: mongoose.Types.ObjectId(leave.user) } },
                  {
                    $or: [
                      { 'roles.name': 'admin' },
                      {
                        $and: [
                          { 'roles.name': 'supervisor' },
                          {
                            department: mongoose.Types.ObjectId(
                              leave.department
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
                sender: leave.user,
                recipient: id,
                content: {
                  id: newLeave.id,
                  message: 'sent a request for leave',
                  type: 'leave',
                  status: 'Pending',
                },
              };
              await notificationModel.create(notification);

              io.to(id.toString()).emit('newNotification', {
                ...notification,
                sender: leave.user_name,
              });

              if (settings.email) {
                sendMail({
                  type: 'newLeave',
                  sender: leave.user_name,
                  email: email,
                  leaveId: notification.content.id,
                });
              }
            });
          });
        return res.status(201).json(newLeave);
      })
      .catch((error) => {
        console.log(error);
        return res.status(409).json({ message: error });
      });
  } catch (error) {
    console.log(error);
  }
};
export const updateLeave = async (req, res) => {
  const { id: _id } = req.params;
  const leave = req.body;
  //console.log(req.body);
  //console.log(JSON.parse(req.body.attachments)[0]);

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No leave with that id');
  //mongoose
  let updatedLeave;
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
      // console.log('1', element);
      filesArray.push(file);
    });
    const newFiles = JSON.parse(leave.attachments).concat(filesArray);
    //console.log(newFiles);
    updatedLeave = await leaveModel
      .findByIdAndUpdate(
        _id,
        { ...leave, attachments: newFiles },
        { new: true }
      )
      .populate([
        { path: 'user', select: 'first_name last_name' },
        { path: 'department', select: 'name' },
        { path: 'leaveType' },
      ]);
  } else {
    updatedLeave = await leaveModel
      .findByIdAndUpdate(_id, { ...leave }, { new: true })
      .populate([
        { path: 'user', select: 'first_name last_name' },
        { path: 'department', select: 'name' },
        { path: 'leaveType' },
      ]);
  }
  if (leave.status == 'Approved' || leave.status == 'Rejected') {
    try {
      await userModel
        .findById(updatedLeave.user._id)
        .lean()
        .exec(async (err, result) => {
          const notification = {
            sender: leave.approver,
            recipient: updatedLeave.user._id,
            content: {
              id: _id,
              message: `${leave.status} your leave request`,
              type: 'leave',
              status: leave.status,
            },
          };
          await notificationModel.create(notification);
          io.to(updatedLeave.user._id.toString()).emit('newNotification', {
            ...notification,
            sender: leave.user_name,
          });

          if (result.settings.email) {
            sendMail({
              type: 'leaveApproval',
              sender: leave.user_name,
              email: result.email,
              leaveId: notification.content.id,
              status: leave.status,
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  res.json(updatedLeave);
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

export const fetchLeaveByDateRange = async (req, res) => {
  // console.log('here');
  const { fromDate, toDate } = req.body;
  try {
    const leaves = await leaveModel
      .find({
        $and: [
          { fromDate: { $gte: new Date(fromDate) } },
          { toDate: { $lte: new Date(toDate) } },
          { status: 'Approved' },
        ],
      })
      .populate([
        { path: 'user', select: 'first_name last_name roles' },
        { path: 'department', select: 'name' },
        { path: 'leaveType' },
      ])
      .exec();
    //https://stackoverflow.com/questions/62970611/return-match-item-only-from-array-of-object-mongoose
    const holidays = await holidayModel
      .aggregate([
        { $unwind: { path: '$lists' } },
        { $replaceRoot: { newRoot: '$lists' } },
        {
          $match: {
            $and: [
              { startDate: { $gte: new Date(fromDate) } },
              { endDate: { $lte: new Date(toDate) } },
            ],
          },
        },
      ])
      .exec();
    //  console.log(leaves);
    //   console.log(holidays);

    res.status(200).json({ leaves, holidays });
  } catch (error) {
    console.log(err);
    res.status(404).json({ message: error });
  }
};

export const fetchLeaveByDateRangePersonal = async (req, res) => {
  const { fromDate, toDate, id } = req.body;
  // console.log(id);
  try {
    const leaves = await leaveModel
      .find({
        $and: [
          { user: mongoose.Types.ObjectId(id) },
          { fromDate: { $gte: new Date(fromDate) } },
          { toDate: { $lte: new Date(toDate) } },
        ],
      })
      .populate([
        { path: 'user', select: 'first_name last_name roles' },
        { path: 'department', select: 'name' },
        { path: 'leaveType' },
      ])
      .exec();
    //https://stackoverflow.com/questions/62970611/return-match-item-only-from-array-of-object-mongoose
    const holidays = await holidayModel
      .aggregate([
        { $unwind: { path: '$lists' } },
        { $replaceRoot: { newRoot: '$lists' } },
        {
          $match: {
            $and: [
              { startDate: { $gte: new Date(fromDate) } },
              { endDate: { $lte: new Date(toDate) } },
            ],
          },
        },
      ])
      .exec();
    //  console.log(leaves);
    //  console.log(holidays);

    res.status(200).json({ leaves, holidays });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};
export const fetchLeaveRequests = async (req, res) => {
  const role = req.params.role;
  const id = req.params.user;
  const department = req.params.department;
  try {
    let leaves = [{}];
    if (role == 'admin') {
      leaves = await leaveModel
        .find({})
        .populate([
          { path: 'user', select: 'first_name last_name roles' },
          { path: 'department', select: 'name' },
          { path: 'leaveType' },
        ])
        .exec((err, items) => {
          const filterItems = items.filter((item) => item.user._id != id);
          res.status(200).json(filterItems);
        });
    } else if (role == 'supervisor') {
      leaves = await leaveModel
        .find({})
        .populate([
          {
            path: 'user',
            select: 'first_name last_name roles',
            populate: {
              path: 'roles',
              select: 'name',
            },
          },
          { path: 'department', select: 'name' },
          { path: 'leaveType' },
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
    } else res.status(200).json(leaves);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};

export const fetchUpcomingLeaves = async (req, res) => {
  const { id } = req.params;
  var currentDate = moment().startOf('day');
  var date7Days = moment(currentDate).add(7, 'days');

  try {
    const leaves = await leaveModel
      .find({
        $and: [
          { user: id },
          { status: 'Approved' },
          { fromDate: { $gte: currentDate } },
          { fromDate: { $lte: date7Days } },
        ],
      })
      .populate([
        { path: 'user', select: 'first_name last_name roles' },
        { path: 'department', select: 'name' },
        { path: 'leaveType' },
      ]);
    var limit2 = leaves.slice(0, 2);
    res.status(200).json(limit2);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const fetchLeaveHistory = async (req, res) => {
  const { id } = req.params;

  try {
    /*
        const leaves = await leaveModel
      .aggregate([
        {
          $lookup: {
            from: 'leavetypes',
            localField: 'code',
            foreignField: 'leaveType',
            as: 'leaveTypes',
          },
        },
      ])
      .exec();
    console.log(leaves[0].leaveTypes);
    leaveModel.populate(
      leaves,
      [
        { path: 'user', select: 'first_name last_name roles' },
        { path: 'department', select: 'name' },
      ],
      (err, result) => {
        console.log(result);
        res.status(200).json(result);
      }
    );
    console.log(leaves);


    */
    const leaves = await leaveModel
      .find({ user: id })
      .populate([
        { path: 'user', select: 'first_name last_name roles' },
        { path: 'department', select: 'name' },
        { path: 'leaveType' },
      ])
      .exec((err, result) => {
        //console.log(err, result);
        res.status(200).json(result);
      });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const fetchTodayLeaves = async (req, res) => {
  var currentDate = moment().startOf('day');
  var next1Day = moment(currentDate).add(1, 'day');

  try {
    const leaves = await leaveModel
      .find({
        $and: [
          { status: 'Approved' },
          {
            $or: [
              {
                $and: [
                  { fromDate: { $lte: currentDate } },
                  { toDate: { $gte: currentDate } },
                ],
              },
              {
                $and: [
                  { fromDate: { $gte: currentDate } },
                  { fromDate: { $lt: next1Day } },
                ],
              },
            ],
          },
        ],
      })
      .populate([
        { path: 'user', select: 'first_name last_name roles' },
        { path: 'department', select: 'name' },
        { path: 'leaveType' },
      ]);
    res.status(200).json(leaves);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const fetchLeaveCount = async (req, res) => {
  try {
    const leaves = await leaveModel.aggregate([
      { $match: { status: 'Approved' } },
      {
        $group: {
          _id: '$department',
          leaves: { $addToSet: '$_id' },
        },
      },
      {
        $unwind: '$leaves',
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
    leaveModel.populate(
      leaves,
      {
        path: 'department',
      },
      (err, result) => {
        // console.log(result);
        res.status(200).json(result);
      }
    );
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
