// validators/taskValidators.js
const { body } = require('express-validator');

const createTaskValidator = [
  body('title')
    .notEmpty()
    .withMessage('Title is required'),
  body('completed')
    .optional()
    .isBoolean()
    .withMessage('Completed must be a boolean'),
];

const updateTaskValidator = [
  body('title')
    .optional()
    .notEmpty()
    .withMessage('Title cannot be empty'),
  body('completed')
    .optional()
    .isBoolean()
    .withMessage('Completed must be a boolean'),
];

module.exports = {
  createTaskValidator,
  updateTaskValidator,
};
