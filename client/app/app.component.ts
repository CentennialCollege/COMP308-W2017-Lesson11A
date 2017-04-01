import { Component } from '@angular/core';

import { Game } from './games/game';

import { GamesService } from './games/games.service';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  providers: [GamesService]
})
export class AppComponent {
}
