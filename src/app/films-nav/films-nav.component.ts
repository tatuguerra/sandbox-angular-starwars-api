import { Component, OnInit } from '@angular/core';
import { Film } from "../film.model";
import { FilmService } from "../film.service";

@Component({
  selector: 'app-films-nav',
  templateUrl: './films-nav.component.html',
  styleUrls: ['./films-nav.component.scss']
})

export class FilmsNavComponent implements OnInit {

  films$ : Film[];
  selectedFilm: Film;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getFilms()
    .subscribe(data => this.films$ = data.results);
  }

  onSelect(film: Film): void{
    this.selectedFilm = film;
    
  }

}
