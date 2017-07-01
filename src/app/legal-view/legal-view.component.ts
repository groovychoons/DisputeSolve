import { Component, OnInit } from '@angular/core';

import { Options } from '../options';
import { DataService } from '../data.service';

@Component({
  selector: 'app-legal-view',
  templateUrl: './legal-view.component.html',
  styleUrls: ['./legal-view.component.css'],
  providers: [ DataService ]
})

export class LegalViewComponent implements OnInit {

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
