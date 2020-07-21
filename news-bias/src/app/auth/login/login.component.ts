import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url = environment.googleAuthUrl;
  logged = false;
  info = {
    name: null,
    email: null,
    picture: null
  }

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.logged = this.authService.getLogged();
    this.info = this.authService.getInfo();
  }
}
