const asyncHandler = require('express-async-handler');
const Task = require('../models/Task');

// GET /api/tasks
exports.getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// GET /api/tasks/:id
exports.getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }
  res.json(task);
});

// POST /api/tasks
exports.createTask = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error('Title is required');
  }
  const task = await Task.create({
    title: req.body.title,
    completed: req.body.completed || false,
  });
  res.status(201).json(task);
});

// PUT /api/tasks/:id
exports.updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }
  task.title = req.body.title !== undefined ? req.body.title : task.title;
  task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;
  const updatedTask = await task.save();
  res.json(updatedTask);
});

// DELETE /api/tasks/:id
exports.deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }
  await task.remove();
  res.status(204).send();
});
