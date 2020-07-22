import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if(!this.authService.getLogged()){
      window.location.replace(window["env"]["googleAuthUrl"]);
    }
  }

}
