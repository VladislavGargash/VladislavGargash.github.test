import {Film} from './film';
 
export class FilmDataService{

    private data: Film[] = [{Title: "Rocky", Year: "1976", imdbID: "tt0075148", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg"},
                            {Title: "Rocky Pink", Year: "1976", imdbID: "tt0152218", Type: "movie", Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYzZmMTIwNWItMWNlMS00MThmLWJjNzAtZTgwOWIxMjAwNjM1XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"}];

    getData(): Film[] {
        return this.data;
    }

    addData(film: Film){
        this.data.push(new Film(film.Title, film.Year, film.imdbID, film.Type, film.Poster));
    }
}