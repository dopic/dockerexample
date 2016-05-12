/**
 * Created by douglas on 11/05/16.
 */
'use strict';

var http = require('http');

var server = http.createServer((req, res) => {
    res.end('Hello World!');
});


server.listen(3000, function (){
   console.log(`Server is listening o port ${server.address().port}`);
});

