import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestMethod, RequestOptions, Response, } from '@angular/http';
import { Game } from './game';

@Injectable()
export class GamesService {
  // Instance Variables
  private _baseURL = '/api/games';
  public games:Game[];

  // Constructor -------------------
  constructor(public _http: Http) {
  }

  // Methods -----------------------

  public list(): Observable<Game[]> {
  return this._http
  .get(this._baseURL)
  .map(this.extractData)
  .catch(this.handleError);
}

  read(gameId: string): Observable<any> {
  return this._http
  .get(`${this._baseURL}/${gameId}`)
  .map((res: Response) => res.json())
  .catch(this.handleError);
  }

private extractData(res: Response) {
  let body:Game[] = res.json();
  this.games = res.json();
  return body || {};
}

  private handleError(error: Response | any) {
    let errMsg: string;
    if(error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}
