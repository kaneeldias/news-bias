import { Component, OnInit } from '@angular/core';
import {ArticleService} from "./article.service";
import {Article} from "./article.model";

@Component({
  selector: 'app-article-display',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = {
    url: "DEFAULT",
    title: "DEFAULT",
    content: "DEFAULT"
  };

  rating = {
    category: undefined,
    polarity: undefined
  };

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticle(this.article);
  }

  nextArticle(): void {
    this.articleService.getArticle(this.article);
    this.articleService.rateArticle(this.article, this.rating);
    this.resetRating();
  }

  resetRating(): void {
    this.rating.category = undefined;
    this.rating.polarity = undefined;
  }

}
