import {Injectable} from '@angular/core';
import {Show} from "./Show";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FetchShowDataFromAPIService {

  constructor(private http: HttpClient) {
  }

  public fetch(show: Show): Observable<Show> {
    return this.http.get<any>('https://api.tvmaze.com/singlesearch/shows?q=' + show.title)
      .pipe(map(data => {
        let fetchedShow = new Show();
        fetchedShow.id = show.id;
        fetchedShow.title = show.title;
        fetchedShow.summary = data["summary"];
        // @ts-ignore
        fetchedShow.image = data["image"]["medium"];
        return fetchedShow;
      }));
  }

}
