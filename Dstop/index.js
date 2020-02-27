const express = require('express');
const app = express();
const port = 8000;

app.listen(port,function(err){
    if(err){
        console.log(`Connection error ${err}`);
        return;
    }
    console.log(`Connection Established and server running on port : ${port}`);
})