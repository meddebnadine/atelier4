import { Genre } from './genre.model';

export class Film {
  idFilm!: number;
  titreFilm!: string;  
  noteFilm!: number;   
  dateSortie!: Date;
  genre!: Genre;
}