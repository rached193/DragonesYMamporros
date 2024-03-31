import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { GamesListComponent } from './features/games-list/games-list.component';

export const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'list', component: GamesListComponent }
];
