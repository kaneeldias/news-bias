import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    this.checkLogged();
  }

  private checkLogged(): void {
    console.log("He");
    this.http.get(environment.serverUrl+"/auth/check",
      {withCredentials: true})
      .subscribe((data) => {
        if(data === true){
          localStorage.setItem('logged', "true");
          console.log("Be");
          this.fetchInfo();
        }
        else localStorage.setItem('logged', "false");
      });
  }

  private fetchInfo(): void {
    this.http.get(environment.serverUrl+"/auth/info",
      {withCredentials: true})
      .subscribe((data: any) => {
        let info = {
          name: data.name,
          email: data.email,
          picture: data.picture,
        }
        localStorage.setItem('info', JSON.stringify(info));
      });
  }

  public refresh(): void {
    this.checkLogged();
  }

  getLogged(): boolean {
    return localStorage.getItem("logged") === "true";
  }

  getInfo(): any {
    return JSON.parse(localStorage.getItem("info"));
  }

}
