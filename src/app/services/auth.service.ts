import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable()
export class AuthService {
  
  private curretSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  private dataUserLoggedIn: BehaviorSubject<any>;
  public currentDataUserLoggedIn: Observable<any>;
  
  corsHeaders: any;

  constructor(private http: HttpClient, private cookie: CookieService) {
    this.corsHeaders = new HttpHeaders({
      "Content-Type": "application/json",
    });

    this.curretSubject = new BehaviorSubject<any>(cookie.get("token"));
    this.currentUser = this.curretSubject.asObservable();

    this.dataUserLoggedIn = new BehaviorSubject<any>(cookie.get("dataLogin"));
    this.currentDataUserLoggedIn = this.dataUserLoggedIn.asObservable();
  }

  // get token
  public get currentUserToken(): any {
    return this.curretSubject.value;
  }

  // get data login user
  public get currentUserLoggin() {
    return this.dataUserLoggedIn.value;
  }
}
