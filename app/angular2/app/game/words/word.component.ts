import {Component} from 'angular2/core'

import {Word} from './word'
import {WordService} from './word.service'

@Component({
  selector: "words",
  templateUrl: "app/game/words/word.component.html",
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
    this._wordService.getWord(1)
          .subscribe(
            response => {
              this.word = response;
              console.log(this.word)

              // this.word.attempt = "wrong attemt"

              // this._wordService.updateScore( this.word )
              //   .subscribe( response => {
              //     console.log("--updated--")
              //     console.log(response)
              //   })
          }
        )


    this._wordService.getScore(1)
          .subscribe(
            response => {
              this.word = response;
              console.log(this.word)
            }
          )
  }



}