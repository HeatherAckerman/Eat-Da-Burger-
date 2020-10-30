DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE theBestBurgers
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burgerName VARCHAR(50) NOT NULL,
	devoured BOOLEAN DEFAULT false
);
