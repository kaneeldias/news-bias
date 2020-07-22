import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Article} from "./article.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticle(targetArticle: Article): void {
    this.http.get(window["env"]["serverUrl"] + "/fetch").subscribe((article: Article) => {
        targetArticle.url = article.url;
        targetArticle.title = article.title;
        targetArticle.content = article.content;
    });
  }

  rateArticle(article:Article, rating:{}): void {
    this.http.post(window["env"]["serverUrl"] + "/rate", {
      url: article.url,
      rating: rating
    },
      {withCredentials: true}
    ).subscribe(() => {
      console.log("sf");
    });
  }

}
