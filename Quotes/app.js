var express = require('express');
var app = express();
var quotes = require('./quotes.js');

app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.use(express.static('static'));

app.get('/api/quote', function(req, res, next) {
    quotes.getQuoteFromDB(function(err, quote){
    	console.log(quote);
    	res.send(quote);
    });
});

app.get('/api/quotes', function(req, res, next) {
    quotes.getQuotesFromDB(function(err, quotes){
    	console.log(quotes);
    	res.send(quote);
    });
});

app.get('*', function(req, res){
  res.send('Not found', 404);
});

module.exports = app;