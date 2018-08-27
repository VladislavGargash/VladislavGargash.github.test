import { Component, OnInit} from '@angular/core';
import {FilmDataService} from './film.data.service';
import { HttpService} from './http.service';
import {Film} from './film';


@Component({
    selector: 'my-app',
    templateUrl: './template.html',
    providers: [FilmDataService, HttpService]
})

export class AppComponent implements OnInit{
    films: Film[];
    filmsInCollection: Film[];

    constructor(private filmDataService: FilmDataService, private httpService: HttpService){}

    addFilmInCollection(film: Film) {
        this.filmDataService.addData(film);
    }

    deleteFilmFromCollection(filmNumber: number) {
        this.filmsInCollection.splice(filmNumber, 1);
    }

    ngOnInit(){
        this.filmsInCollection = this.filmDataService.getData();
    }

    searchFilms(title: string, year: string){
        this.clearSearch();
        this.httpService.getData(title, year).subscribe(data => this.films=data);
    }

    clearSearch(){
        this.films = [];
    }
}