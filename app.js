'use strict';

var express = require('express');
var app = express()

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public');
});
  app.use('/', express.static(__dirname + '/public'));


app.listen(port, function () {
  console.log('Example app listening on port 3000!');
})

