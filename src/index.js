import process from "process";

import express from "express";

console.info({
    eventType: "init",
    timestamp: new Date()
});

const port = process.env.NAG_IT_PORT || 7777;
const app = express();

app.get("/", (req, res) => {
    console.log({
        eventType: "request",
        timestamp: new Date()
    });
    res.send(JSON.stringify({ok: 1}));
});

app.listen(port);

console.info({
    eventType: "listen",
    message: `listening on port ${port}`,
    timestamp: new Date()
});
