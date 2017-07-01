import { Component, OnInit, Input } from '@angular/core';

import { Options } from '../options';
import { DataService } from '../data.service';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.css'],
  providers: [ DataService ]
})

export class MetricCardComponent implements OnInit {

  @Input()	
  dataset: string = 'initial';

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
