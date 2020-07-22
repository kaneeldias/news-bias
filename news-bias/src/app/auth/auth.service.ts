import { Injectable } from '@angular/core';
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
    this.http.get(window["env"]["serverUrl"] +"/auth/check",
      {withCredentials: true})
      .subscribe((data) => {
        if(data === true){
          localStorage.setItem('logged', "true");
          this.fetchInfo();
        }
        else localStorage.setItem('logged', "false");
      });
  }

  private fetchInfo(): void {
    this.http.get(window["env"]["serverUrl"] +"/auth/info",
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

  public logout(): void {
    this.http.get(window["env"]["serverUrl"] +"/auth/logout",
      {withCredentials: true})
      .subscribe((data: any) => {
        localStorage.setItem('logged', "false");
        localStorage.removeItem('info');
        window.location.replace(window["env"]["localhostUrl"]);
      });

  }

  getLogged(): boolean {
    return localStorage.getItem("logged") === "true";
  }

  getInfo(): any {
    return JSON.parse(localStorage.getItem("info"));
  }

}
