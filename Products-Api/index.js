const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));//use the middleware bodyparser
app.use(bodyParser.json());


app.use('/',require('./routes'));

app.listen(port,function (err){//listen to the port 8000
    if(err){
        console.log(err);//display any error
        return;
    }
    console.log("connected");
})