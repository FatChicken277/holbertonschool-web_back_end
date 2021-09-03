-- This script creates user table
CREATE TABLE IF NOT EXISTS users(
    id int NOT NULL AUTO_INCREMENT,
    email Varchar(255) NOT NULL UNIQUE,
    name Varchar(255),
    PRIMARY KEY (id)
);
