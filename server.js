const express = require("express");
const mongojs = require("mongojs");
//sends the server to the index which requires the model/s
const index = require("./models/index");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "fitnessTracker"; //database name
const collections = ["workouts"]; //table name 

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});





app.listen(3000, () => {
    console.log("App running on port 3000!");
});