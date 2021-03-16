import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class LoginService{
    constructor(private http: HttpClient){}

    //infoUser = 'assets/user.json'
    userLogged(data : any){
        return  this.http.post("https://localhost:44333/api/auth/login",data).toPromise();
    }
}