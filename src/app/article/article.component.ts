import { Component, OnInit, Input } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Article } from './article.model';
import {FlagArticleService} from '../flag-article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  
  articles: Article[];
  voteNumber: number = 0;

  constructor(private service: FlagArticleService) { 
    this.service = service;


  }

  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  flagArticle(): void{
    this.voteNumber = this.service.numberCount();
    this.article.votes = this.voteNumber - 1;
  }

  ngOnInit() {
  }

}
