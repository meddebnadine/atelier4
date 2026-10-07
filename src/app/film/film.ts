import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './film.html',
})
export class FilmComponent implements OnInit {
  films: Film[];

  constructor(private filmService: FilmService) {
    this.films = this.filmService.listeFilms();
  }

  ngOnInit(): void {}

  supprimerFilm(f: Film): void {
    let conf = confirm('Êtes-vous sûr ?');
    if (conf) {
      this.filmService.supprimerFilm(f);
      this.films = this.filmService.listeFilms();
    }
  }
}