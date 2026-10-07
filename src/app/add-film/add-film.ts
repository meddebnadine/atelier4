import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film';

@Component({
  selector: 'app-add-film',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-film.html',
})
export class Addfilm implements OnInit {
  newfilm = new Film();

  constructor(private filmService: FilmService, private router: Router) {}

  ngOnInit(): void {}

  addfilm(): void {
    this.filmService.ajouterFilm(this.newfilm);
    this.router.navigate(['films']);
  }
}