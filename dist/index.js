"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const utils_1 = __importDefault(require("./utils"));
const port = 3000;
const app = (0, express_1.default)()
    .use(express_1.default.static('public'))
    .use('/assets', express_1.default.static(__dirname + 'public/'))
    .set('views', '/views')
    .set('view engine', 'ejs')
    .use(express_1.default.static(node_path_1.default.join(__dirname, 'views')));
express_1.default.static(node_path_1.default.join(__dirname, "./public"));
app.get('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let repoData = yield fetch('https://api.github.com/repos/HypnoticSiege/express-typescript-boilerplate', {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => json);
        let discordData = yield fetch('https://api.lanyard.rest/v1/users/479456028967305247', {
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
        });
    });
});
app.get('/students', function (req, res) {
    res.render('students', {
        users: utils_1.default.getAllStudents()
    });
});
app.get('/students/:id', function (req, res) {
    let user = utils_1.default.getStudent(req.params.id);
    res.render('viewstudents', {
        user: user
    });
});
app.listen(port, function () {
    console.clear();
    console.log(`Bathroom Log | System Online`);
    console.log(`Made by Luis Quezada - https://quezada.nl`);
    console.log(`[INFO] Online on localhost:${port}`);
});
