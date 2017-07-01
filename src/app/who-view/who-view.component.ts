import { Component, OnInit } from '@angular/core';

import { Metric } from '../metric';
import { MetricDataService } from '../metric-data.service';

@Component({
  selector: 'app-who-view',
  templateUrl: './who-view.component.html',
  styleUrls: ['./who-view.component.css'],
  providers: [ MetricDataService ]
})
export class WhoViewComponent implements OnInit {

  data: Metric[];

  constructor(private metricDataService: MetricDataService) { }

  getData(): void {
		this.data = this.metricDataService.getData();
	}

  ngOnInit() {
		this.getData();
  }

}
