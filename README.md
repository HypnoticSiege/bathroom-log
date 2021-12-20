# Bathroom Log
A simple system to log bathroom uses made by Students.  
# Use Case  
Bathroom Log is aimed to be used by schools or in any situation where you would want to log bathroom uses. Orginally wanted to make it to have even more movement logging on students incase of COVID Cases in a student.  
# What's used
This application was made using many technologies that are listed below.
- [Node JS](http://nodejs.org/) - Manages JavaScript code on the server
- [Express](https://expressjs.com/) - Web Framework
- [Passport](http://www.passportjs.org/) - Administrator Account Authentication
- [JSON](https://www.json.org/) - Main Database to store Students & Teachers (Plan on switching to [MongoDB](https://www.mongodb.com/))
# Installation
### Install all needed packages  
```
npm install
```  
### Add your Administrators and Students to the two JSON files found in ``./data/``  
### Start Bathroom Log
```
node index.js
```
