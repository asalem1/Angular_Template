const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('tasks', ['tasks']);

// Get All Tasks
router.get('/tasks', function(req, res, next) {
  db.tasks.find(function(err, tasks) {
    if (err) {
      res.status(404);
      res.send(err);
    }
    res.json(tasks);
  });
});

// // Get Single Tasks
router.get('/tasks/:id', function(req, res, next) {
  db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task) {
    if (err) {
      res.status(404);
      res.send(err);
    }
    res.json(task);
  });
});

// // Save Tasks
router.post('/tasks', function(req, res, next) {
  let task = req.body;
  // if (!task.title || (task.isDone + '')) {
  if (!task) {
    res.status(404);
    res.json({
      error: 'information is invalid'
    });
  } else {
    db.tasks.save(task, function(err, task) {
      if (err) {
        res.status(404);
        res.send(err);
      }
      res.json(task);
    });
  }
});

// Delete Task
router.delete('/tasks/:id', function(req, res, next) {
  db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task) {
    if (err) {
      res.status(404);
      res.send(err);
    }
    res.json(task);
  });
});

// Update Task
router.put('/tasks/:id', function(req, res, next) {
  let task = req.body.task;
  let updatedTask = {};
  if (task) {
    updatedTask = task;
    delete updatedTask._id;
  }
  db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updatedTask, {}, function(err, task) {
    if (err) {
      res.status(404);
      res.send(err);
    }
    res.json(task);
  });
});

module.exports = router;
