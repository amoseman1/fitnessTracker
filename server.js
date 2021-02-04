const express = require("express");
const mongojs = require("mongojs");
const morgan = require("morgan");
const { Workout } = require("./models/index");
//sends the server to the index which requires the model/s
const index = require("./models/index");

const app = express();

app.use(logger("dev"));//doesnt like 'logger'

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "fitnessTrackerdb"; //database name
const collections = ["workouts"]; //table name 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTrackerdb", { useNewUrlParser: true });

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

//is this needed here? should it go in the seeds.js file?
Workout.create(workoutSeed).then(results => {
    console.log(results);
})
    .catch(({ message }) => {
        console.log(message)
    });


app.listen(3000, () => {
    console.log("App running on port 3000!");
});