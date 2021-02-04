const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                Type: String,
                required: true, "Please enter an exercise",
            },
            name: String,
            duration: {
                type: Number,
                trim: true,
            },
            weight: {
                type: Number,
                trim: true,
            },
            reps: {
                type: Number,
                trim: true,
            },
            sets: {
                type: Number,
                trim: true,
            },
            duration: {
                type: Number,
                trim: true,
                required: true
            },
            distance: {
                type: Number,
                trim: true
            },
        }
    ]
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;