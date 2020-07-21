import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation-box',
  templateUrl: './navigation-box.component.html',
  styleUrls: ['./navigation-box.component.css']
})


export class NavigationBoxComponent implements OnInit {

  @Output() nextArticleFunc = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  nextArticle(): void{
    this.nextArticleFunc.emit();
  }

}
