import { Component, OnInit, Injectable  } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { GamesService } from '../games.service';

import { Game } from '../game';

@Component({
  selector: 'edit',
  templateUrl: 'app/games/edit/edit.template.html',
  providers: [GamesService]
})
export class EditComponent{
  // Instance Variables
  game: Game;
  errorMessage: string;
  paramsObserver: any;

  // Constructor Method ----------------------------
  constructor(private _router:Router,
    //private _route: ActivatedRoute,
      private _gamesService: GamesService) {}

      ngOnInit() {
        //this.paramsObserver = this._route.params.subscribe(params => {
        //let gameId = params['id'];
        let gameId = '58964b1c4108ad0d0657f811'; // testing
        this._gamesService.read(gameId).subscribe(game => {
            this.game = game;
          },
            error => this._router.navigate(['/games']));
        //});
      }

      ngOnDestroy() {
        this.paramsObserver.unsubscribe();
      }
}
