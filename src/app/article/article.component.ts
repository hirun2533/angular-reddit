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
  Flagservice: FlagArticleService;

  constructor(Flagservice: FlagArticleService) { 
    this.Flagservice = Flagservice;

  }
  flagArticle(): void{

    this.article.votes = this.Flagservice.CountLowerPoint() - 1;
  }
  
  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
