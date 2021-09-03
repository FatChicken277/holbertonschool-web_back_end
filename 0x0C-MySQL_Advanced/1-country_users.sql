-- This script creates user table
CREATE TABLE IF NOT EXISTS users(
    id int NOT NULL AUTO_INCREMENT,
    email Varchar(255) NOT NULL UNIQUE,
    name Varchar(255),
    country ENUM('US', 'CO', 'TN') NOT NULL DEFAULT 'US',
    PRIMARY KEY (id)
);
