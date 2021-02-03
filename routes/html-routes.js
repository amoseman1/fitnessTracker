app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../public.index.html"));
});
//is this route correct?
app.get("/stats", (req, res) => {
    res.sendFile(path.join(_dirname + "../public/stats.html"));
});
//??
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(_dirname + "../public/exercise.html"));
});