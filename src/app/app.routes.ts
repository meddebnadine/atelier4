import { Routes } from '@angular/router';
import { FilmComponent } from './film/film';
import { Addfilm } from './add-film/add-film';
import { UpdateFilmComponent } from './update-film/update-film';

export const routes: Routes = [
  { path: 'films', component: FilmComponent },
  { path: 'add-film', component: Addfilm },
  { path: 'updateFilm/:id', component: UpdateFilmComponent },
  { path: '', redirectTo: 'films', pathMatch: 'full' }
];