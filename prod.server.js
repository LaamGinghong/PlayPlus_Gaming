var express = require('express');
let config = require('./config/index');

let app = express();
let apiRoutes = express.Router();

app.use('/api', apiRoutes);
app.use(express.static('./dist'));

let port = process.env.PORT || config.build.port;

module.exports = app.listen(port, (err) => {
	if(err) {
		console.error(err);
		return;
	}
})