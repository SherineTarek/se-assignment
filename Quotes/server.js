var db = require('./db.js');

db.connect(function(err) {
	console.log('connected to db');
    require('./quotes.js').seed(function (err, seeded) {
        if(err) throw err;
        if(seeded) {
        	console.log('seeding db completed successfully');
        } else {
        	console.log('DB is already seeded');
        }
        require('./app.js').listen(3000, function() {
	        console.log('app listening on port 3000!');
	    });
    });
});