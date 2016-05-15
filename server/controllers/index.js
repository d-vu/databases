var models = require('../models');
// connect to the mysql database
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, result) {
        res.status(200).send(result);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [ req.body.username || '', req.body.message || '', req.body.roomname || ''];
      models.messages.post(params, function (err, result) {
        res.status(201).send();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.send('mooooo');
      // connection.connect();
      // connection.query('select * from users');
      // // console.log("this is the bodyData! ", bodyData);
      // connection.end();
      // res.send();
    },
    post: function (req, res) {
      console.log("In the POST user method");
      console.log("This is the username", req.body.username);
      var username = [ req.body.username ];
      models.users.post(username, function (err, result) {
        res.status(201).send();
      });
      res.end();
    }
  }
};

