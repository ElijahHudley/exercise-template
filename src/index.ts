import * as express from "express";

import * as routes from "./handlers";
import * as response from "./lib/http-responses";

const app = express();
const port = 3000;

let handlers = {};

Object.keys(routes).forEach((key, index) => {
    let item = {};
    routes[key].paths.forEach(path => {
        handlers[path] = routes[key].handler;
    });

    return item;
});

// send request to respected controller based on route used
// removed context as serverless is used in this build
const echo = function (req, res) {
    let resourcePath = req.route.path.replace("/", "");

    if (resourcePath in handlers) {
        handlers[resourcePath](req, responseCallback);
    } else {
        responseCallback(response.ERROR_404.code, response.ERROR_404);
    }

    // added the status of the request that was made
    function responseCallback(data, status) {
        const json = JSON.stringify(data);
        res.send({ body: json, status: status.code });
    }
};

// initial node server and routes for echo
app.get("/echo", (req, res) => echo(req, res));
app.listen(port, () => console.log(`listened to port ${port}!`));
