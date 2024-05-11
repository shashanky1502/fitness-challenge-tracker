const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    activity_name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    duration: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    calories: { type: Number, required: true },
    });

module.exports = mongoose.model('Activity', activitySchema);

//payload

// {
//     "activity_name": "Running",
//     "description": "Morning run",
//     "date": "2021-10-10",
//     "time": "06:00",
//     "duration: 60,
//     "user": "615c1c5b9b6b6e001f4c6a3f",
//     "calories": 500
//     }


