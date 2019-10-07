import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class FlagArticleService {

  articleArray: Article[] = [];
  LowerPoint: number;
  numberArray:number[] = [];

  constructor() { 


  }

  generateArticle(){
    this.articleArray = [
      new Article('Angular', 'http://angular.io', 3,'administrator'),
      new Article('Fullstack', 'http://fullstack.io', 2,'user'),
      new Article('Angular Homepage', 'http://angular.io', 1,'user'),
     
    ];
  }

  getGenArticle(){
    return this.articleArray;
  }

  numberCount(){
    this.articleArray = this.getGenArticle();

    if(this.articleArray){
      for(var i=0; i < this.articleArray.length; i++){
          this.numberArray.push(this.articleArray[i].votes);
      }

    }
      this.LowerPoint = this.numberArray.reduce((a,b) => Math.min(a,b));
      return this.LowerPoint;
  }

}
