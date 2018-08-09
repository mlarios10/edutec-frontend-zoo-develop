'use strict'

const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(_dirname + '/dist'));

app.get('/*', function(req, res){
    res.sendfile(path.join(_dirname + '/dist/index.html'));

    
});

app.listen(process.env.PORT || 4200); 