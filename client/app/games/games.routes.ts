import { Routes, ActivatedRoute } from '@angular/router';
import { GamesComponent } from './games.component';

// include sub components
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

export const GamesRoutes: Routes = [{
  path: '',
  component: GamesComponent,
  children: [
    {path: 'games', component: ListComponent},
    {path: 'games/:id', component: EditComponent}
  ]
}]
