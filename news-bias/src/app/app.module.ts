import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ArticleComponent } from './article/article.component';
import { RateBoxComponent } from './rate-box/rate-box.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import { NavigationBoxComponent } from './navigation-box/navigation-box.component';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import {OverlayModule} from "@angular/cdk/overlay";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ArticleComponent,
    RateBoxComponent,
    NavigationBoxComponent,
    AuthComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonModule,
        HttpClientModule,
        FormsModule,
        OverlayModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
