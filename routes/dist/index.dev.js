"use strict";

var express = require('express');

var router = express.Router(); //models

var taches = require('../models/tache'); //GET method


router.get('/', function (req, res) {
  taches.find({}, function (err, tasks) {
    res.render("todo", {
      listeTaches: tasks
    });
  });
}); //POST Method

router.post('/', function _callee(req, res) {
  var contenu, task;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //Save the task in db
          contenu = req.body.content; //console.log("coucou : ", taches.findOne({ content: req.body.content }));

          if (!(Number(contenu) != 0)) {
            _context.next = 15;
            break;
          }

          task = new taches({
            content: contenu
          });
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(task.save());

        case 6:
          res.redirect('/');
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);
          res.redirect('/');
          console.log(_context.t0);

        case 13:
          _context.next = 16;
          break;

        case 15:
          res.redirect('/');

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 9]]);
}); //Update method

router.get('/edit/:id', function (req, res) {
  var id_task = req.params.id;
  taches.find({}, function (err, task) {
    res.render('todoEdit', {
      listeTaches: task,
      idTask: id_task
    });
    console.log(err);
  });
}).post('/edit/:id', function (req, res) {
  var id_task = req.params.id;
  taches.findByIdAndUpdate(id_task, {
    content: req.body.content
  }, function (err) {
    if (err) return res.send(500, err);
    res.redirect('/');
  });
}); //Delete method

router.get('/remove/:id', function (req, res) {
  var id_task = req.params.id;
  taches.findByIdAndRemove(id_task, function (err) {
    if (err) return res.send(500, err);
    res.redirect('/');
  });
});
module.exports = router;