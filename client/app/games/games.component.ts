import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestMethod, RequestOptions, Response, } from '@angular/http';
import { Game } from './game';
import { Component } from '@angular/core';
import { GamesService } from './games.service';

@Component({
  selector: 'games',
  template: `<router-outlet></router-outlet>`,
  providers: [GamesService]
})
export class GamesComponent{
  errorMessage: string;
  public games:Game[];
  constructor(public _gamesService: GamesService) {
    this.games = new Array<Game>();
  }
}
