import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film';

@Component({
  selector: 'app-update-film',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-film.html',
})
export class UpdateFilmComponent implements OnInit {

  currentFilm = new Film();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.currentFilm = this.filmService.consulterFilm(id);
  }

  updateFilm(): void {
    this.filmService.updateFilm(this.currentFilm);
    this.router.navigate(['films']);
  }
}