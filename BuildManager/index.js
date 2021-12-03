// TODO: Hide it
const { exec } = require('child_process');
const express = require('express')
const crypto = require("crypto")
const app = express()
const port = 3002

app.use(express.json())

app.post('/update', (req, res) => {
    // TODO: check secret
    // const git_event = req.headers["x-github-event"];

    let failed = false;


    // run update
    const exec_res = exec('sh ./bash_scripts/update.sh > update.txt', (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
            failed = true;
        }
    });

    res.sendStatus(failed === false ? 200 : 404);
})

const _server_process = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

const serverClosedHandler = (err) => {
    if(err) {
        console.log(`Error on closing the server!`, err);
    }

    console.log("Server terminated!");
}

process.on('SIGTERM', () => {
    _server_process.close(serverClosedHandler);
});

