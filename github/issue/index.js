const fetch = require("node-fetch");
const file = require('./testIssue.json');
require('dotenv').config();


const user = "ckymn";
const repo = "PushJs";

const createIssue = (file) => {
    file.forEach(issue => {
        fetch(`https://api.github.com/repos/${user}/${repo}/issues`, {
            method: 'post',
            body:    JSON.stringify(issue),
            headers: {'Content-Type': 'application/json', 'Authorization': `token ${process.env.TOKEN}`}
        })
        .then(res =>  res.json())
        .then(json => {
            console.log(`Issue created at ${json.url}`)
        })
    })
}

createIssue(file);