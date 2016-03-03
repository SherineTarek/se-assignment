var quotesRawText = require('./quotes.json');
var database = require('./db.js')
var db = database.db();

exports.getElementByIndexElseRandom = function (array, index) {
	if(index) {
		return array[index];
	} else {
		return array[Math.floor(Math.random() * array.length)];
	}
}

exports.getQuotesFromJSON = function () {
	return quotesRawText;
}

exports.getQuoteFromJSON = function () {
	if(index) {
		return quotesRawText[index];
	} else {
		return quotesRawText[Math.floor(Math.random() * quotesRawText.length)];
	}
}

exports.seed = function (cb) {
	var quotesFetched = this.getQuotesFromJSON();
	var col = db.collection('quotes');
	col.count(function (err, count) {
	    if (!err && count === 0) {
	        col.insertMany(quotesFetched, function(err, r) {
			    if(!err) return cb(err, true);
			    cb(err, false);
			});
	    } else {
	    	cb(err, false);
	    }
	});
}

exports.getQuotesFromDB = function (cb) {
	var col = db.collection('quotes');
	var cursor = col.find();
	var quotesRetrieved = [];
	cursor.each(function(err, doc) {
		if (doc != null) {
			quotesRetrieved.push(doc);
		} else {
			cb(err, quotesRetrieved);	
		}
	});
}

exports.getQuoteFromDB = function (cb, index) {
	this.getQuotesFromDB(function(err, quotes){
		if(index) {
			return cb(err, quotes[index]);
		} else {
			return cb(err, quotes[Math.floor(Math.random() * quotes.length)]);
		}
	});
}