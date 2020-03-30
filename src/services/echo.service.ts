import { Observable } from "rxjs";
import { of } from "rxjs";

export class EchoService {
  constructor() {}

  private getEchoData(): any {
    return {
      data: "test"
    };
  }

  public check(): Observable<any> {
    return of(this.getEchoData());
  }
}
