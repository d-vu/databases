var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * from messages', function(err, result) { err ? console.log(err) : callback(err, result);});
    }, // a function which produces all the messages
    post: function (params, callback) {
      params[1] = params[1].replace('\'', '\\\'');
      var query = 'INSERT into messages (userID, roomID, message) VALUES (\'' + params[0] + '\',\'' + params[2] + '\',\'' + params[1] + '\')';
      db.query(query, function (err, result) {
        if (err) {
          callback(err, result);
        } else {
          callback(err, result);
        }

      }); 
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function (username, callback) {
      // db.connect();
      db.query('insert into users (userName) values ("' + username + '")', function (err, result) {
        callback(err, result);
      });
      // db.end();
    }
  }
};

