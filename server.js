#!/usr/bin/env node
const express = require('express');
const bodyParser = require('body-parser');
const apis = require('./apis/index.js');

const app = express();
var port = process.env.PORT || 8888;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static('static'))

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

/* serves all the static files */
app.get(/^(.+)$/, function (req, res) {
    console.log("...get");
    console.log(req.params);      // your JSON
    res.sendFile(process.cwd() + req.params[0]);
});

/* serves all the api requests */
app.post("/api/:api/:func", function (req, res) {
    console.log("...post");
    console.log(req.params)
    console.log(req.body);
    //api(inputObj, context, callback)
    //callback(err, resultObj, context);
    let api = req.params.api;
    let func = req.params.func;
    apis[api][func](req.body, res, responseJSON);
});

function responseJSON(err, result, response) {
    if (err) {
        console.log(err);
        return response.status(500).send(err);
    }
    return response.send(JSON.stringify(result));
}

function listen() {
    app.listen(port, function (err) {
        if (err) {
            return console.log('something bad happened', err);
        }
        var port = this._connectionKey.split(":")[4];
        console.log('server listening on PORT ' + port);
    });
}

listen();