import {Injectable} from '@angular/core';
import {Show} from "./Show";
import {FetchShowDataFromAPIService} from "./fetch-show-data-from-api.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public shows: Show[] = [];
  public detailShow: Show | undefined;

  constructor(private fetchShowDataFromAPI: FetchShowDataFromAPIService) {
    this.shows.push(new Show(1, 'Breaking Bad'));
    this.shows.push(new Show(2, 'Game of Thrones'));
  }

  save(show: Show) {
    this.shows.push(show);

  }

  setDetailShow(show: Show) {
    this.fetchShowDataFromAPI.fetch(show).subscribe(fetchedShow => {
      this.detailShow = fetchedShow;
    });
  }
}
