import { Component, OnInit } from '@angular/core';
import { Metric } from '../metric';
import { MetricDataService } from '../metric-data.service';

@Component({
  selector: 'app-legal-view',
  templateUrl: './legal-view.component.html',
  styleUrls: ['./legal-view.component.css'],
  providers: [ MetricDataService ],

})
export class LegalViewComponent implements OnInit {

  data: Metric[];

  constructor(private metricDataService: MetricDataService) { }

  getData(): void {
		this.data = this.metricDataService.getData();
	}

  ngOnInit() {
		this.getData();
  }

}
