const mongoose = require('mongoose');

const tacheSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        "default": Date.now
    }
})

const tache = mongoose.model('taches', tacheSchema);

module.exports = tache;