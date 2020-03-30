import { EchoService, sendEcho } from "../services";
import { throwError } from "rxjs";

class ServiceErrorStub {
    public check() {
        return throwError(new Error("Test error"));
    }
}
describe("*********** Unit Tests for ECHO API ***********", () => {
    let echoService: EchoService;
    let result: any;
    describe("Send back echo data", () => {
        let result;

        beforeEach((done) => {
            echoService = new EchoService();
            done();

        });

        it("should instantiate", () => {
            expect(echoService).toBeDefined();
        });

        it("should Echo", () => {
            sendEcho(echoService, (resultData) => {
                result = resultData;
                console.log("echoService", {...result})
            });
            expect(result).toBeDefined();
        });

        describe("When sendEcho return error", () => {
            let result;

            beforeEach((done) => {
                sendEcho(new ServiceErrorStub(), (data) => {
                    result = data;
                    done();
                });

            });

            it("Verify sendEcho returned error", () => {
                expect(result).toBeTruthy();
                expect(result.code).toBeTruthy();
            });
        });


    });
});
