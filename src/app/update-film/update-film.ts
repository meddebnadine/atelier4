import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-film',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-film.html',
})
export class UpdateFilmComponent implements OnInit {

  currentFilm = new Film();
  genres!: Genre[];
  updatedGenreId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    this.genres = this.filmService.listeGenres();
    this.currentFilm = this.filmService.consulterFilm(
      this.activatedRoute.snapshot.params['id']
    );
    
    // Conversion de la date pour l'input de type date (format YYYY-MM-DD)
    if (this.currentFilm.dateSortie) {
      const dateObj = new Date(this.currentFilm.dateSortie);
      // On formate la date en YYYY-MM-DD
      const year = dateObj.getFullYear();
      const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
      const day = ('0' + dateObj.getDate()).slice(-2);
      
      // On réassigne la date formatée sous forme de chaîne pour l'input
      (this.currentFilm.dateSortie as any) = `${year}-${month}-${day}`;
    }

    this.updatedGenreId = this.currentFilm.genre.idGenre;
  }

  updateFilm() {
    this.currentFilm.genre = this.filmService.consulterGenre(this.updatedGenreId);
    this.filmService.updateFilm(this.currentFilm);
    this.router.navigate(['films']);
  }
}