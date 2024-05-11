
const Activity = require('../models/activity');

exports.createActivity = async (req, res) => {
  try {
    const { activity_name, description, date, time, duration, user, calories } = req.body;
    const activity = new Activity({ activity_name, description, date, time, duration, user, calories });
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    console.error('Error creating activity:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    console.error('Error fetching activities:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.getActivityById = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json(activity);
  } catch (error) {
    console.error('Error fetching activity:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.updateActivity = async (req, res) => {
  try {
    const { activity_name, description, date, time, duration, user, calories } = req.body;
    const activity = await Activity.findByIdAndUpdate(req.params.id, { activity_name, description, date, time, duration, user, calories }, { new: true });
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json(activity);
  } catch (error) {
    console.error('Error updating activity:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.deleteActivity = async (req, res) => {
  try {
    const activity = await Activity.findByIdAndDelete(req.params.id);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json({ message: 'Activity deleted' });
  } catch (error) {
    console.error('Error deleting activity:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
