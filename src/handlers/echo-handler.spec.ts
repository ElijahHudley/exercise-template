import { handler } from "./echo-handler";
import * as services from "../services";

describe("echo Handler", () => {

    describe("when handler is called", () => {

        it("should invoke sendEcho", () => {
            spyOn(services, "sendEcho").and.callFake((undefined) => {});

            const req = JSON.parse(`{"method":"get","query":{"q":"this is a test"}}`);
            handler(req, null);
            expect(services.sendEcho).toHaveBeenCalled();
        });

        it("should return error if invalid method", () => {
            const req = JSON.parse(`{"method":"put","query":"{null}"}`);

            handler(req, (resp) => {
                expect(resp.code).toBe("405");
            });
        });
    });
});


