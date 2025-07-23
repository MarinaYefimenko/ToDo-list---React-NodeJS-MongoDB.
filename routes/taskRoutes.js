const express = require('express');
const router = express.Router();
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const {
  createTaskValidator,
  updateTaskValidator,
} = require('../validators/taskValidators');
const validateRequest = require('../middleware/validateRequest');

router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/', createTaskValidator, validateRequest, createTask);
router.put('/:id', updateTaskValidator, validateRequest, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
