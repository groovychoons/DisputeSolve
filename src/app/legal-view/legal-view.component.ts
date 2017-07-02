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

  IAm: string = localStorage.getItem('selectedWhoAmI');
  TheyAre: string = localStorage.getItem('selectedWhoAreThey');
  Relationship: string = localStorage.getItem('selectedRelationship');
  IsContract: string = localStorage.getItem('selectedIsContract');
  iLiveIn: string = localStorage.getItem('iLiveIn');
  theyLiveIn: string = localStorage.getItem('theyLiveIn');
  tookPlaceIn: string = localStorage.getItem('tookPlaceIn');

  ngOnInit() {
		this.getData();
  }

}
