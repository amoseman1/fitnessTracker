const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//const { Workout } = require("./models/index");
//sends the server to the index which requires the model/s
const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//this grabs our instance of express using middleware
app.use(require("./routes/html-routes"));
app.use(require("./routes/api-routes"));




mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTrackerdb", { useNewUrlParser: true });



//is this needed here? should it go in the seeds.js file?
// Workout.create(workoutSeed).then(results => {
//     console.log(results);
// })
//     .catch(({ message }) => {
//         console.log(message)
//     });


app.listen(3000, () => {
    console.log("App running on port 3000!");
});