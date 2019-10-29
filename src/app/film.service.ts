import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Film  } from './film.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  endpoint = 'https://swapi.co/api/';
  
  

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getFilms(): Observable<any> {
    return this.http.get<Film[]>(this.endpoint+ 'films/')
    
  }
  getFilm(id: number): Observable<any> {
    return this.http.get(this.endpoint + 'films/' + id);
  }
}
