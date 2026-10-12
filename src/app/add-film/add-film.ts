import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-add-film',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-film.html',
})
export class Addfilm implements OnInit {
  newFilm = new Film();
  genres!: Genre[];       
  newIdGenre!: number;
  newGenre!: Genre;

  constructor(private filmService: FilmService, private router: Router) {}

  ngOnInit(): void {
      this.genres = this.filmService.listeGenres();
  }

  addFilm() {
    this.newGenre = this.filmService.consulterGenre(this.newIdGenre);
    this.newFilm.genre = this.newGenre;
    this.filmService.ajouterFilm(this.newFilm);
    this.router.navigate(['films']);
  }
}