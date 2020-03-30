import {EchoService, sendEcho} from "../services";
import {isInvalidHttpMethod} from "../lib/utils";

// would have a routes file to maintain this and 2nd level routes that would go in paths
const paths = ["echo"];

const handler = function (req, responseCallback) {
    if (isInvalidHttpMethod(req, "get", responseCallback)) return;

    sendEcho(new EchoService(), (data, status) => responseCallback(req.query || {}, status));
};

export {paths, handler};
