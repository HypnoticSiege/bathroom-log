// Import all modules and libraries needed
import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import utils from './utils';

const port = 3000;
const app = express()
    .use(express.static('public'))
    .use('/assets', express.static(__dirname + 'public/'))
    .set('views', '/views')
    .set('view engine', 'ejs')
    .use(express.static(path.join(__dirname, 'views')));
express.static(path.join(__dirname, "./public"));

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
app.get('/students', function (req, res) {
    res.render('students', {
        users: utils.getAllStudents()
    });
});
app.get('/students/:id', function (req, res) {
    let user = utils.getStudent(req.params.id);

    res.render('viewstudents', {
        user: user
    });
});
app.listen(port, function () {
    console.clear();
    console.log(`Bathroom Log | System Online`)
    console.log(`Made by Luis Quezada - https://quezada.nl`);
    console.log(`[INFO] Online on localhost:${port}`)
});