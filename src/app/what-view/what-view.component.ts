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
    localStorage.setItem('selectedIsContract2', value);
  }

  onChange3($event, value) {
    localStorage.setItem('selectedIsContract3', value);
  }

  onChange4($event, value) {
    localStorage.setItem('selectedIsContract4', value);
  }
  constructor() { }

  ngOnInit() {
  }

}
