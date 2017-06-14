const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const mLab = require('../mlab');
const mongoose = require('mongoose')

mongoose.connect(connection);
mongoose.connection.once('open', function() {
  console.log('connected to the DB: ', connection);
})

// set route for home
// Get All Tasks
router.get('*', function(req, res, next) {
  console.log('i received the get request')
  db.tasks.find(function(err, tasks) {
    if (err) {
      res.status(404);
      res.send(err);
    }
    res.json(tasks);
  });
});

// // Get Single Tasks
// router.get('/tasks/:id', function(req, res, next) {
//   db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task) {
//     if (err) {
//       res.status(404);
//       res.send(err);
//     }
//     res.json(task);
//   });
// });

// // Save Tasks
router.post('/api/tasks', function(req, res, next) {
  let task = req.body;
  if (!task.title || (task.isDone + '')) {
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

// // Delete Task
// router.delete('/tasks/:id', function(req, res, next) {
//   db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task) {
//     if (err) {
//       res.status(404);
//       res.send(err);
//     }
//     res.json(task);
//   });
// });

// // Update Task
// router.put('/tasks/:id', function(req, res, next) {
//   let task = req.body;
//   let updatedTask = {};
//   if (task.isDone) {
//     updatedTask.isDone = task.isDone;
//   }
//   if (task.title) {
//     updatedTask.title = task.title;
//   }
//   if (!updatedTask) {
//     res.status(404);
//     res.json({
//       error: 'information is invalid'
//     });
//   } else {
//     db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updateTask, {}, function(err, task) {
//       if (err) {
//         res.status(404);
//         res.send(err);
//       }
//       res.json(task);
//     });
//   }
// });

module.exports = router;
