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
# Work in Progess
- Count a student's bathroom uses in one day.
- Count lifetime bathroom uses by a student.
- Find a way to prevent brute-forcing admin accounts.
- Auto-Complete Student lookup on admin page?
- More Administrative functions.

# Contributing
Contributing to this project would be greatly appreciated! If you would like to add any features or do any of the WIP's, you can fork this project and open a pull request!

# Contact
If you have any questions regarding Bathroom Log, you can contact me either on my [Website](https://hypnoticsiege.net/contact) or [Email Me](mailto:luis@hypnoticsiege.net?subject=Bathroom Log)
