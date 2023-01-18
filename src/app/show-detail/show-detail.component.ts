import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Show} from "../Show";
import {Observable} from "rxjs";

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  get show$(): Observable<Show> {
    return this.dataService.detailShow$;
  }


}
