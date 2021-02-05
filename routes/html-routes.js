//this package alllows us to use the same instance of express through thr router package
const router = require('express').Router()
const path = require("path");

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});
//??
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public.index.html"));
});

//is this route correct?
module.exports = router