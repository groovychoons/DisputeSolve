import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-where-view',
  templateUrl: './where-view.component.html',
  styleUrls: ['./where-view.component.css']
})
export class WhereViewComponent implements OnInit {
  
  onChange($event, value) {
    localStorage.setItem('iLiveIn', value);
  }

  onChange2($event, value) {
    localStorage.setItem('theyLiveIn', value);
  }

  onChange3($event, value) {
    localStorage.setItem('tookPlaceIn', value);
  }

  constructor() { }

  ngOnInit() {
  }

}
