// Import all modules and libraries needed
require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'node:path';
import utils from './utils';
import supabase from './supabase';

const app = express()
    .use(express.static('public'))
    .use('/assets', express.static(__dirname + 'public/'))
    .set('views', 'views')
    .set('view engine', 'ejs')
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, 'views')));
express.static(path.join(__dirname, "./public"));

// get user from cookie on every request
app.use(async (req, res, next) => {
    const user = await supabase.auth.getUser(req.cookies['access_token']);
    req.user = user || null;

    next();
});

app.get('/', async function (req, res) {
    let repoData = await fetch('https://api.github.com/repos/HypnoticSiege/express-typescript-boilerplate', {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    })
        .then(res => res.json())
        .then(json => json);
    
    let discordData = await fetch('https://api.lanyard.rest/v1/users/479456028967305247', {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    })
        .then(res => res.json())
        .then(json => json);
    
    res.render('index.ejs', {
        stars: repoData.stargazers_count,
        forks: repoData.forks_count,
        issues: repoData.open_issues_count,
        language: repoData.language,
        watchers: repoData.watchers,
        owner: repoData.owner,
        status: discordData.data.discord_status
    })
});
app.get('/students', utils.auth.isUserLoggedIn, async function (req, res) {
    res.render('students', {
        users: await utils.db.select('students', '*', 'id')
    });
});
app.get('/students/:id', async function (req, res) {
    let user = await utils.db.select('students', '*', req.params.id);

    res.render('viewstudents', {
        user: user
    });
});

app.get('/register', function (req, res) {
    res.render('register');
});
app.get('/login', function (req, res) {
    res.render('login');
});

app.post('/backend/register', async function (req, res) {
    let name = req.body.name,
        email = req.body.email,
        password = req.body.password,
        subscribed = req.body.subscribed;
    
    await utils.auth.registerUser(name, email, password, subscribed);
    res.redirect('/login');
});

app.post('/backend/login', async function (req, res) {
    let email = req.body.email,
        password = req.body.password;
    
    let userData = await utils.auth.loginUser(email, password);
    console.log(userData);

    if (userData.user === null) {
        res.redirect(`/login?err=${encodeURIComponent(`Invalid email or password.`)}`);
    } else {
        await utils.auth.setSession(userData.session.refresh_token, userData.session.access_token);

        res.cookie('access_token', userData.session.access_token, { maxAge: 604800000, httpOnly: false });
        res.redirect('/');
    };
});

app.listen(process.env.port || 3000, function () {
    console.clear();
    console.log(`Bathroom Log | System Online`)
    console.log(`Made by Luis Quezada - https://quezada.nl`);
    console.log(`[INFO] Online on localhost:${process.env.port || 3000}`);
});