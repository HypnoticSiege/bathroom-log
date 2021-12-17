const config = require('./config');
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require("ejs");
const path = require("path");
const passport = require('passport');
const session = require('express-session');
const students = require("./data/students.json");
const admins = require("./data/admins.json");

// Directory Configuration
const dataDir = path.resolve(`${process.cwd()}`);
const templateDir = path.resolve(`${dataDir}${path.sep}views${path.sep}pages`);

// Express config
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.use("/", express.static(path.resolve(`${dataDir}${path.sep}assets`)));
app.listen(config.web.port);

app.use(session({
    secret: 'LavellePrepHS',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

const initializePassport = require('./passport-config');
initializePassport(
    passport,
    email => admins.find(user => user.email === email),
    id => admins.find(user => user.id === id)
);

// Express Render function
const renderTemplate = (res, req, template, data = {}) => {
    const baseData = {};
    res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
};


/* 
Students Section START
Includes:
- Main Page
- Handles POST Request after form is filled out
- Checks grades & names
*/

// Home Page
app.get("/", (req, res) => {
    renderTemplate(res, req, "index.ejs")
})

// On Form Submission
app.post("/", (req, res) => {
    const data = req.body; //Get form data.
    const search = students.filter(result => result.name === data.fullName) //Search for student name in Database.

    if (search.length === 0) { //If Student not in database.
        console.log('Student not found!')
        renderTemplate(res, req, "./errors/name-not-found.ejs")
    } else {
        const grade = search.map(a => a.grade).toString() //Get Student grade from previous search term.

        if (grade != data.grade) { //If the grade selected does not match grade in database.
            console.log('Incorrect grade!')
            renderTemplate(res, req, "./errors/incorrect-grade.ejs")
        } else { //If all information is correct and matches.
            console.log(data.fullName + ', grade ' + data.grade + ' is going to the bathroom during ' + data.period + ' period.')
            renderTemplate(res, req, "success.ejs")
        }
    }
});

/* 
Students Section END
Students Section END
Students Section END
Students Section END
*/




/* 
Admin/Teacher Section START
Includes:
- Admin Pages
- Handles LOGIN and LOGOUT events
- Secures passwords
- Admin Account management
*/

app.get('/login', checkNotAuthenticated, (req, res) => {
    renderTemplate(res, req, "./admin/login.ejs")
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login',
}))

app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/')
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

app.get('/admin', checkAuthenticated, (req, res) => {
    renderTemplate(res, req, "./admin/index.ejs")
})

app.get('/admin/lookup', checkAuthenticated, (req, res) => {
    renderTemplate(res, req, "./admin/lookup.ejs")
})

app.post('/admin/lookup', checkAuthenticated, (req, res) => {
    const data = req.body;
    const search = students.filter(result => result.name === data.name) //Search for student name in Database.
    if (search.length === 0) { //If Student not in database.
        console.log('Student not found!')
        renderTemplate(res, req, "./errors/name-not-found.ejs")
    } else {
        renderTemplate(res, req, "./admin/results.ejs", { result: search })
    }
});

/* 
Admin/Teacher Section END
Admin/Teacher Section END
Admin/Teacher Section END
Admin/Teacher Section END
*/

console.log('Online on port 80')