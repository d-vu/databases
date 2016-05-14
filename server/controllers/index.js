var models = require('../models');
// connect to the mysql database
var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'root',      
  password: 'a',
  database: 'chat'
});

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('This is request', req);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('this is something');
      res.send('we posted the messages');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
      console.log("this is the username", req.body.username);
      connection.connect();
      connection.query('insert into users (userName) values ("' + req.body.username + '")');
      // console.log("this is the bodyData! ", bodyData);
      connection.end();
      res.send();
    }
  }
};

