const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Please enter an exercise"
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                trim: true,
                required: true
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
            distance: {
                type: Number,
                trim: true
            },
        }
    ]
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;