import {Component, OnInit} from '@angular/core';
import {Show} from "../Show";
import {DataService} from "../data.service";

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  get shows(): Show[] {
    return this.dataService.shows;
  }

  showDetail(show: Show) {
    this.dataService.setDetailShow(show);

  }
}
