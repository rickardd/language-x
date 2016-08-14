import {Component} from 'angular2/core'
import {WordsComponent} from './words/words.component'
import {StatsComponent} from './stats/stats.component'


@Component({
  template: `
    <h1>Game</h1>
    <words></words>
    <stats></stats>
  `,
  directives: [
    WordsComponent,
    StatsComponent
  ]
})

export class GameComponent{

}