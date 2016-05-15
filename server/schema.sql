CREATE DATABASE chat;

USE chat;



/* Create other tables and define schemas for them here! */

    
CREATE TABLE users (
  id INT not null AUTO_INCREMENT,
  userName VARCHAR(255),
  PRIMARY KEY (id)
);

    
CREATE TABLE rooms (
  id INT not null AUTO_INCREMENT,
  roomName VARCHAR(255),
  PRIMARY KEY (id)
);
    
CREATE TABLE messages (
  id INT not null AUTO_INCREMENT,
  userID VARCHAR(255),
  roomID VARCHAR(255),
  message VARCHAR(255),
  PRIMARY KEY (id)
);


-- ALTER TABLE messages ADD FOREIGN KEY (userID) REFERENCES users (id);
-- ALTER TABLE messages ADD FOREIGN KEY (roomID) REFERENCES rooms (id);

