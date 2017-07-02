import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-view',
  templateUrl: './what-view.component.html',
  styleUrls: ['./what-view.component.css']
})
export class WhatViewComponent implements OnInit {

  onChange($event, value) {
    localStorage.setItem('selectedIsContract', value);
  }
  
  onChange2($event, value) {
    localStorage.setItem('inForce', value);
  }

  onChange3($event, value) {
    localStorage.setItem('breach', value);
  }

  onChange4($event, value) {
    localStorage.setItem('loss', value);
  }
  constructor() { }

  ngOnInit() {
  }

}
