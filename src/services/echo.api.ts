import { OK, ERROR } from "../lib/http-responses";

export const sendEcho = (service, callback: any) => {
    service.check().subscribe((data, echoStatus) => callback(data, OK(echoStatus)),
        error => callback(ERROR(error)));
};
