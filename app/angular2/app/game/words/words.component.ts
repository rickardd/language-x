import {Component} from 'angular2/core'

import {Word} from './word'
import {WordService} from './word.service'

@Component({
  selector: "words",
  templateUrl: "app/game/words/words.component.html",
  styleUrls: ["app/game/words/style.css"],
  providers: [
    WordService
  ]
})

export class WordsComponent{

  word = new Word()

  constructor( private _wordService: WordService){

  }

  ngOnInit(){
    console.log("init")
    this._wordService.getWord(3)
          .subscribe(
            response => {
              this.word = response;
              console.log(this.word)
          })
  }



}