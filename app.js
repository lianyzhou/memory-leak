var express = require('express') , 
	path = require("path") ; 

var app = express();

app.set('port', 9001);

app.use(express.bodyParser());
app.use(express.compress());
app.use(express.methodOverride());

app.use(app.router);

app.use('/resources',express.static(path.join(__dirname , "resources")));

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});