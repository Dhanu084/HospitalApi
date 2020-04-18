const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const passport = require('passport');//require passport to use JWT
const passportJWT = require('./config/passport-jwt-strategy');//require passport JWT for API authentication


app.use(express.urlencoded());
app.use(express.json());

app.set('view-engine','ejs');
app.use(express.static('./assets'));

app.use('/',require('./routes'));


app.listen(port,function(err)
{
    if(err){
        console.log(err);
        return;
    }
})
