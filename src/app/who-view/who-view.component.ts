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

  onChange($event, value) {
        alert("You selected some text!");

    localStorage.setItem('selectedWhoAmI', value);
  }

  onChange2($event, value) {
    localStorage.setItem('selectedWhoAreThey', value);
  }


  constructor() { }


  ngOnInit() {
  }

}
