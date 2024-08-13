-- create a new DB
CREATE DATABASE clinic;

-- use the DB
use clinic;

-- create a new table
CREATE TABLE patient (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

-- show tables
show tables;

-- describe table
describe patient;
