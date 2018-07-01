/*
 * 
 * Author   :   John Greenan
 * Date     :   1th July 2018
 * See      :   http://blog.alignment-systems.com/2017/12/web-assembly-streaming-data-for.html
 * See      :   http://blog.alignment-systems.com/2017/12/web-assembly-streaming-data-for_3.html
 * See      :   http://blog.alignment-systems.com/2018/04/msft-wasm.html
 *
 */
'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var path = require('path');

const express = require('express');
const app = express();

//app.use('/public', express.static(path.join(__dirname, 'public')));
//app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'scripts')));

//app.configure(function () {
//    app.use('/public', express.static(__dirname + '/public'));
//    app.use('/scripts', express.static(__dirname + '/scripts'));
//});

app.listen(port);
