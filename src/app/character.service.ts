import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
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
  getCharacters(): Observable<any> {
    return this.http.get<Character[]>(this.endpoint+ 'people/')
    
  }
  getCharacter(): Observable<any> {
    return this.http.get(this.endpoint + 'people/').pipe(
      map(this.extractData));
  }
}
