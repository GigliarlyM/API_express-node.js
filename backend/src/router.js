const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware')

router.get('/tasks', tasksController.getAll);
router.delete('/tasks/:id', tasksController.deleteTask);
router.post('/tasks',
    tasksMiddleware.validateFieldTitle,
    tasksMiddleware.validateFieldStatus,
    tasksController.createdTask
);
router.put('/tasks/:id',
    tasksMiddleware.validateFieldStatus,
    tasksMiddleware.validateFieldTitle,
    tasksController.updateTask
);

module.exports = router;