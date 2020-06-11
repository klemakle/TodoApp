const express = require('express');
const router = express.Router();

//models
const taches = require('../models/tache');

//GET method
router.get('/', (req, res) => {
    taches.find({}, (err, tasks) => {
        res.render("todo", { listeTaches: tasks });
        r,
    });
});


//POST Method
router.post('/', async(req, res) => {

    //Save the task in db
    const contenu = req.body.content;
    //console.log("coucou : ", taches.findOne({ content: req.body.content }));
    if (Number(contenu) != 0) {
        const task = new taches({ content: contenu });
        try {
            //if (taches.findOne({ content: req.body.content }) === null)
            await task.save();
            res.redirect('/');
        } catch (e) {
            res.redirect('/');
            console.log(e);
        }
    } else {
        res.redirect('/');
    }

    //res.render('todo');
    //console.log(req.body)
});




//Update method
router
    .get('/edit/:id', (req, res) => {
        let id_task = req.params.id;
        taches.find({}, (err, task) => {
            res.render('todoEdit', { listeTaches: task, idTask: id_task });
            console.log(err);

        })
    })

.post('/edit/:id', (req, res) => {
    let id_task = req.params.id;
    taches.findByIdAndUpdate(id_task, { content: req.body.content }, err => {
        if (err) return res.send(500, err);

        res.redirect('/');
    });
});



//Delete method
router.get('/remove/:id', (req, res) => {
    let id_task = req.params.id;
    taches.findByIdAndRemove(id_task, err => {
        if (err) return res.send(500, err);
        res.redirect('/');
    });
});


module.exports = router;