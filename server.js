const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const UserAuth = require('./backend/models/user');
const API = require('./backend/secrets');

const app = express();
const router = express.Router();

const port = process.env.API_PORT || 3001;

const corsOptions = {
  origin: 'https://testmoviecatalog.herokuapp.com',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options('*', cors());

mongoose.connect(API || process.env.API);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.header('Cache-Control', 'no-cache');
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'API works!' });
});

router.route('/users/login')
  .post((req, res) => {
    const { loginName, password } = req.body;
    UserAuth.find({ userName: loginName, password }, (err, user) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, userName: user[0].userName });
    });
  });
router.route('/users')
  .post((req, res) => {
    const newUser = new UserAuth();
    const { userName, password } = req.body;
    newUser.userName = userName;
    newUser.password = password;

    UserAuth.findOne({ userName }, (err, user) => {
      if (err) return res.json({ success: false, error: err });
      if (!user) {
        newUser.save((err) => {
          if (err) return res.json({ success: false, error: err });
          return res.json({ success: true, duplicate: false });
        });
      } else {
        return res.json({ success: true, duplicate: true });
      }
    });
  });

router.route('/users/addMovie')
  .put((req, res) => {
    const { movie, userName } = req.body;
    UserAuth.findOneAndUpdate({ userName }, { $push: { movies: movie } }, (err, user) => {
      if (err) {
        return res.json({
          success: false,
          error: err,
        });
      }
      return res.json({
        success: true,
        data: user,
      });
    });
  });

router.route('/users/deleteMovie')
  .put((req, res) => {
    const { movie, userName } = req.body;
    UserAuth.findOneAndUpdate({ userName }, { $pull: { movies: movie } }, (err, user) => {
      if (err) {
        return res.json({
          success: false,
          error: err,
        });
      }
      return res.json({
        success: true,
        data: user,
      });
    });
  });

router.route('/users/checkMovie')
  .post((req, res) => {
    const { id, userName } = req.body;
    UserAuth.find({ userName, 'movies.id': { $in: [id] } }, (err, movie) => {
      if (err) {
        return res.json({
          success: false,
          error: err,
        });
      }
      return res.json({
        success: true,
        isChecked: movie.length,
      });
    });
  });

router.route('/users/movies')
  .post((req, res) => {
    const { userName } = req.body;
    UserAuth.find({ userName }, (err, user) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, user });
    });
  });

router.route('/users/addTv')
  .put((req, res) => {
    const { tv, userName } = req.body;
    UserAuth.findOneAndUpdate({ userName }, { $push: { tvs: tv } }, (err, user) => {
      if (err) {
        return res.json({
          success: false,
          error: err,
        });
      }
      return res.json({
        success: true,
        data: user,
      });
    });
  });

router.route('/users/deleteTv')
  .put((req, res) => {
    const { tv, userName } = req.body;
    UserAuth.findOneAndUpdate({ userName }, { $pull: { tvs: tv } }, (err, user) => {
      if (err) {
        return res.json({
          success: false,
          error: err,
        });
      }
      return res.json({
        success: true,
        data: user,
      });
    });
  });

router.route('/users/checkTv')
  .post((req, res) => {
    const { id, userName } = req.body;
    UserAuth.find({ userName, 'tvs.id': { $in: [id] } }, (err, tv) => {
      if (err) {
        return res.json({
          success: false,
          error: err,
        });
      }
      return res.json({
        success: true,
        isChecked: tv.length,
      });
    });
  });

router.route('/users/tvs')
  .post((req, res) => {
    const { userName } = req.body;
    UserAuth.find({ userName }, (err, user) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, user });
    });
  });

app.use('/api', router);

app.listen(port, () => {
  console.log(`api works on port ${port}`);
});
