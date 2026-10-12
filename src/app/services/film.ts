import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films: Film[];
  genres: Genre[];

  constructor() {
    this.genres = [
      { idGenre: 1, nomGenre: "Science-fiction" },
      { idGenre: 2, nomGenre: "Drame" },
      { idGenre: 3, nomGenre: "Action" }
    ];

    this.films = [
      { idFilm: 1, titreFilm: "Inception", noteFilm: 9, dateSortie: new Date("01/01/2010"),
        genre: { idGenre: 1, nomGenre: "Science-fiction" } },
      { idFilm: 2, titreFilm: "Le Parrain", noteFilm: 9.5, dateSortie: new Date("03/24/1972"),
        genre: { idGenre: 2, nomGenre: "Drame" } },
      { idFilm: 3, titreFilm: "Gladiator", noteFilm: 8.5, dateSortie: new Date("05/05/2000"),
        genre: { idGenre: 3, nomGenre: "Action" } }
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
  listeGenres(): Genre[] {
    return this.genres;
  }

  consulterGenre(id: number): Genre {
    return this.genres.find(g => g.idGenre == id)!;
  }
}