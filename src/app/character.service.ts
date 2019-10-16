import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  endpoint = 'https://swapi.co/api/people';

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
    return this.http.get(this.endpoint)
  }
  getCharacter(id): Observable<any> {
    return this.http.get(this.endpoint + 'Character/' + id).pipe(
      map(this.extractData));
  }
}
