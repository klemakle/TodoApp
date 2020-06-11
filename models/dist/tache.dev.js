"use strict";

var mongoose = require('mongoose');

var tacheSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    "default": Date.now
  }
});
var tache = mongoose.model('taches', tacheSchema);
module.exports = tache;