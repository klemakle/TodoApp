"use strict";var mongoose=require("mongoose"),tacheSchema=new mongoose.Schema({content:{type:String,required:!0},date:{type:Date,default:Date.now}}),tache=mongoose.model("taches",tacheSchema);module.exports=tache;