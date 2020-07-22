import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import * as queryString from 'query-string';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    const urlParams = queryString.parse(window.location.search);
    if (urlParams.error) {
      console.log(`An error occurred: ${urlParams.error}`);
    } else {
      console.log(`The code is: ${urlParams.code}`);
      this.http.post(window["env"]["serverUrl"]+ "/auth",
        {code: urlParams.code},
        {withCredentials: true})
        .subscribe((data: any) => {
          this.authService.refresh();
          setTimeout(function(){
            window.location.replace(window["env"]["localhostUrl"]);
          }, 1000)

        });
    }

  }

}
