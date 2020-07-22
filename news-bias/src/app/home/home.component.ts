import { Component, OnInit } from '@angular/core';
import * as queryString from "query-string";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    const urlParams = queryString.parse(window.location.search);
    if (urlParams.error) {
      //console.log(`An error occurred: ${urlParams.error}`);
    } else {
      //console.log(`The code is: ${urlParams.code}`);
      if(!urlParams.code) return;
      this.http.post(window["env"]["serverUrl"]+ "/auth",
        {code: urlParams.code},
        {withCredentials: true})
        .subscribe((data: any) => {
          this.authService.refresh();
          window.location.replace(window["env"]["localhostUrl"]);
        });
    }
  }

}
