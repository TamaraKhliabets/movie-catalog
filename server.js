let express = require('express');
// let mongoose = require('mongoose');
// let bodyParser = require('body-parser');

let app = express();
let router = express.Router();

let port = process.env.API_PORT || 3001;
//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Credentials', 'true');
 res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.header('Cache-Control', 'no-cache');
 next();
});

router.get('/', (req, res) => {
 res.json({ message: 'API works!'});
});

app.use('/movie', router);

app.listen(port, () => {
 console.log(`api works on port ${port}`);
});
