import {Component, OnInit} from '@angular/core';
import {Show} from "../Show";
import {DataService} from "../data.service";

@Component({
  selector: 'app-shows-form',
  templateUrl: './shows-form.component.html',
  styleUrls: ['./shows-form.component.css']
})
export class ShowsFormComponent implements OnInit {

  show: Show;


  constructor(private dataService: DataService) {
    this.show = new Show();
  }

  ngOnInit(): void {
  }

  save() {
    this.dataService.save(this.show);
    this.show = new Show();
  }
}
