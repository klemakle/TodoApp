// Modules
const express = require('express');
const mongoose = require('mongoose');

const index = require('./routes/index');


//server config
const app = express();
const port = 4000;




//Conect to our db
const db = require("./config/key").MongoURI;
mongoose.set("useFindAndModify", false);
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //open the Server
        app.listen(port, () => console.log(`Server started on port ${port}`));
        console.log('MongoDB connected')
    })
    .catch(err => console.error(err));




//View configurations
app.set('view engine', 'ejs');
app.use("/static", express.static("public"));

//BodyParser
app.use(express.urlencoded({ extended: true }));

//routes index
app.use('/', index);