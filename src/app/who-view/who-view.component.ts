import { Component, OnInit } from '@angular/core';

import { Options } from '../options';
import { DataService } from '../data.service';

@Component({
  selector: 'app-who-view',
  templateUrl: './who-view.component.html',
  styleUrls: ['./who-view.component.css'],
  providers: [ DataService ]
})
export class WhoViewComponent implements OnInit {

  initial: Options[];
  secondary: Options[];

  constructor(private dataService: DataService) { }

  getData(): void {
		this.initial = this.dataService.getInitial();
    this.secondary = this.dataService.getSecondary();
	}

  ngOnInit() {
		this.getData();
  }

}
