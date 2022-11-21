CREATE DATABASE IF NOT EXISTS bathroomlog;
USE bathroomlog;

CREATE TABLE admins (
    id int NOT NULL AUTO_INCREMENT,
    username TEXT,
    password TEXT,
    permission INT,
    PRIMARY KEY(id)
);

CREATE TABLE students (
    id int NOT NULL AUTO_INCREMENT,
    name TEXT,
    email TEXT,
    grade INT,
    PRIMARY KEY(id)
);

CREATE TABLE bathrooms (
    id int NOT NULL AUTO_INCREMENT,
    name TEXT,
    location TEXT,
    description TEXT,
    PRIMARY KEY(id)
);

CREATE TABLE logs (
    id int NOT NULL AUTO_INCREMENT,
    bathroom_id INT,
    user_id INT,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);