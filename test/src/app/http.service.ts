import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Film} from './film';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(title: string, year: string) : Observable<Film[]> {
        return this.http.get('http://www.omdbapi.com/?apikey=508188b3&s=' + title +"&y=" + year).pipe(map(data=>{
            let usersList = data["Search"];
            return usersList.map(function(film:any) {
                return {Title: film.Title, Year: film.Year, imdbID: film.imdbID, Type: film.Type, Poster: film.Poster};
              });
        }));
    }
}