const { Workout } = require("../models");
const router = require('express').Router();




router.get("/api/workouts", (req, res) => {
    db.Workout.findAll({}).sort({ date: -1 })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("api/workouts/range", (req, res) => {
    db.Workout.findAll({}).limit(7)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

router.post("/api/workpouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/update/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(

        req.params.id,

        {
            $push: {
                exercises: req.body
            }
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.json(data); //what else do i need to do with this data?
            }
        }
    );
});

module.exports = router;