import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http'
import 'rxjs/add/operator/map';

@Injectable()

export class WordService{

  private rootUrl = "http://localhost:3000/"

  constructor( private _http : Http ){

  }

  getWord( wordId ){
    return this._http.get( this.url("translations/" + wordId) )
                .map( response => response.json())
  }

  private
    url( urlExtention ){
      return this.rootUrl + urlExtention + ".json";
    }
}