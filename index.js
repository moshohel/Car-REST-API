const express = require('express');

// set up express app
const app = express();

// Handling Requests
// get request handelar
app.get('/api', function(req, res){

    res.send({name: "Mohammad shohel"});
    // res.end();
});

// listen for requests with callback function
// process.env.port - listing for setup variable
/* If is has a port number specified in the enviroment
 then it will listen to request on that port otherwise
 It will listen to 4000
 */
app.listen(process.env.port || 4000, function(){
    console.log('request listing');
});

