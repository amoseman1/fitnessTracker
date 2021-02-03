

app.post("/update/:id", (req, res) => {
    db.fitnessTracker.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            $set: {
                exercises: {
                    name: req.body.name,
                    duration: res.body.duration,
                    weight: req.body.weight,
                    reps: req.body.reps,
                    sets: req.body.sets,
                    duration: req.body.duration,
                    distance: req.body.distance,
                    modified: Date.now()
                }
            }
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data); //what else do i need to do with this data?
            }
        }
    );
});


// app.post("/submit", (req, res) => {
//     console.log(req.body);

//     db.fitnessTracker.insert(req.body, (error, data) => {
//         if (error) {
//             res.send(error);
//         } else {
//             res.send(data);
//         }
//     });
// });