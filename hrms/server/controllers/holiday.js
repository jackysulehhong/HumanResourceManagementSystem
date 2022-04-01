import holidayModel from '../models/holidayModel.js';
import mongoose from 'mongoose';

export const fetchAllHolidays = async (req, res) => {
  try {
    const holidays = await holidayModel.find();
    res.status(200).json(holidays);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const fetchHolidaysByYear = async (req, res) => {
  const { year } = req.params;

  try {
    const holidays = await holidayModel.findOne({ year });
    res.status(200).json(holidays);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
//https://stackoverflow.com/questions/7267102/how-do-i-update-upsert-a-document-in-mongoose
export const createHoliday = async (req, res) => {
  const { year, holiday } = req.body;
  const updatedHolidays = await holidayModel.findOneAndUpdate(
    { year },
    { $push: { lists: { ...holiday, _id: mongoose.Types.ObjectId() } } },
    { upsert: true, new: true }
  );
  // console.log(updatedHolidays);
  res.status(200).json(updatedHolidays);
};

export const updateHoliday = async (req, res) => {
  const { year, id: _id } = req.params;
  const holiday = req.body;
  // console.log(holiday);
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No holiday with that id');
  const updatedHoliday = await holidayModel.findOneAndUpdate(
    { year, 'lists._id': _id },
    {
      $set: {
        'lists.$.title': holiday.title,
        'lists.$.description': holiday.description,
        'lists.$.startDate': holiday.startDate,
        'lists.$.endDate': holiday.endDate,
      },
    },
    { new: true }
  );
  // console.log(updatedHoliday);
  res.json(updatedHoliday);
};

export const deleteHoliday = async (req, res) => {
  const { year, id: _id } = req.params;
  // console.log(year, _id);
  // console.log('here');
  await holidayModel
    .updateOne(
      { year },
      { $pull: { lists: { _id: mongoose.Types.ObjectId(_id) } } },
      { new: true }
    )
    .exec(async (err, result) => {
      const newHolidays = await holidayModel.findOne({ year });
      //  console.log(newHolidays);
      res.json(newHolidays);
    });
};

export const getHoliday = async (req, res) => {
  const { year, id: _id } = req.params;
  try {
    const holidays = await holidayModel
      .aggregate([
        { $unwind: { path: '$lists' } },
        { $replaceRoot: { newRoot: '$lists' } },
        {
          $match: { _id: mongoose.Types.ObjectId(_id) },
        },
      ])
      .exec();

    ///const holidays = await holidayModel.find({ year, 'lists._id': _id });
    res.status(200).json(holidays);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
