import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films: Film[];

  constructor() {
    this.films = [
      { idFilm: 1, titreFilm: "Inception", genreFilm: "Science-Fiction", noteFilm: 9, dateSortie: new Date("07/14/2010") },
      { idFilm: 2, titreFilm: "Le Parrain", genreFilm: "Drame", noteFilm: 9.5, dateSortie: new Date("03/24/1972") },
      { idFilm: 3, titreFilm: "Gladiator", genreFilm: "Action", noteFilm: 8.5, dateSortie: new Date("05/05/2000") }
    ];
  }

  listeFilms(): Film[] {
    return this.films;
  }

  ajouterFilm(f: Film): void {
    this.films.push(f);
  }

  supprimerFilm(f: Film): void {
    const index = this.films.indexOf(f, 0);
    if (index > -1) {
      this.films.splice(index, 1);
    }
  }

  consulterFilm(id: number): Film {
    return this.films.find(f => f.idFilm == id)!;
  }

  updateFilm(f: Film): void {
    const index = this.films.indexOf(f, 0);
    if (index > -1) {
      this.films.splice(index, 1, f);
    }
  }
}