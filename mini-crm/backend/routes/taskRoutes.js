const router = require("express").Router();

const Task = require("../models/Task");

const auth = require("../middleware/authMiddleware");

router.post("/", auth, async (req, res) => {

  const task = await Task.create(req.body);

  res.json(task);
});

router.get("/", auth, async (req, res) => {

  const tasks = await Task.find()
    .populate("lead")
    .populate("assignedTo");

  res.json(tasks);
});

router.put("/:id", auth, async (req, res) => {

  const task = await Task.findById(
    req.params.id
  );

  if (
    task.assignedTo.toString() !== req.user.id
  ) {
    return res.status(403).json({
      message: "Unauthorized"
    });
  }

  task.status = req.body.status;

  await task.save();

  res.json(task);
});

module.exports = router;