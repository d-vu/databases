CREATE DATABASE chat;

USE chat;


DROP TABLE IF EXISTS `User`;
    
CREATE TABLE `user` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `userName` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `Room`;
    
CREATE TABLE `room` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomName` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `Messages`;
    
CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `userID` INTEGER NULL DEFAULT NULL,
  `roomID` INTEGER NULL DEFAULT NULL,
  `message` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


ALTER TABLE `Messages` ADD FOREIGN KEY (userID) REFERENCES `User` (`id`);
ALTER TABLE `Messages` ADD FOREIGN KEY (roomID) REFERENCES `Room` (`id`);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

