import { Component, OnInit, Injectable } from '@angular/core';

import { GamesService } from '../games.service';

import { Game } from '../game';

@Component({
  selector: 'list',
  templateUrl: 'app/games/list/list.template.html',
  providers: [GamesService]
})
export class ListComponent {
  // Instance Variables
  games: Game[];
  errorMessage: string;

  // Constructor Method ----------------------------
  constructor(private _gamesService: GamesService) {
    this.games = new Array<Game>();
  }

  // Methods ---------------------------------------
  ngOnInit() {
    this._gamesService.list().subscribe(
      games => this.games = games,
      error => this.errorMessage = <any>error);
  }

  showConfirm():void {
    if(!confirm("Are you sure?")) {
      event.preventDefault();
      window.location.assign("/games");
    }
  }

}
