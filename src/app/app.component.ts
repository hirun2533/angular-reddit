import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { FlagArticleService } from './flag-article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(articles: FlagArticleService){
   
    articles.ArticleGenerate();
    this.articles = articles.ArticleGenerate();
  }
  
  
  // title = 'angular-reddit';
  addArticle(title: HTMLInputElement, link: HTMLInputElement, role:HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} link: ${link.value} and role:${role.value}`);
    this.articles.push(new Article(title.value, link.value,0,role.value));
    title.value = '';
    link.value = '';
    role.value ='';
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
