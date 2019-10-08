import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class FlagArticleService {

  articleArray: Article[] = [];
  
  constructor() { 

  }

  ArticleGenerate(): Article[] {
    this.articleArray = [
      new Article('Angular', 'http://angular.io', 3,'administrator'),
      new Article('Fullstack', 'http://fullstack.io', 2,'user'),
      new Article('Angular Homepage', 'http://angular.io', 1,'user'),
     
    ];
    return this.articleArray;
  }

  CountLowerPoint(){
 
    var numberArray: number[] = [];
    if(this.articleArray = this.ArticleGenerate()){
     
      var i = 0;
      while(i < this.articleArray.length ){
        numberArray.push(this.articleArray[i].votes);
        i++;
      }
      
    }
      
      var LowerPoint: number;
      LowerPoint = numberArray.reduceRight((a,b) => Math.min.apply(Math,numberArray));     
      return LowerPoint;
  }
  

}
