const Task = require('../models/Task');

// GET /api/tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// GET /api/tasks/:id
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: 'Invalid Task ID' });
  }
};

// POST /api/tasks
exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

// PUT /api/tasks/:id
exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
};

// DELETE /api/tasks/:id
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
