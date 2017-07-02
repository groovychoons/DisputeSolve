import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-view',
  templateUrl: './what-view.component.html',
  styleUrls: ['./what-view.component.css']
})
export class WhatViewComponent implements OnInit {

  element: HTMLInputElement;
  txt: string;
  element2: HTMLInputElement;
  txt2: string;
  element3: HTMLInputElement;
  txt3: string;
  element4: HTMLInputElement;
  txt4: string;

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

  explanation($event) {
    this.element = <HTMLInputElement>document.getElementById("explanation");
    this.txt = this.element.value;
    localStorage.setItem('explanation', this.txt);
  }

  explanation2($event) {
    this.element2 = <HTMLInputElement>document.getElementById("explanation2");
    this.txt2 = this.element2.value;
    localStorage.setItem('explanation2', this.txt2);
  }

  explanation3($event) {
    this.element3 = <HTMLInputElement>document.getElementById("explanation3");
    this.txt3 = this.element3.value;
    localStorage.setItem('explanation3', this.txt3);
  }

  explanation4($event) {
    this.element4 = <HTMLInputElement>document.getElementById("explanation4");
    this.txt4 = this.element4.value;
    localStorage.setItem('explanation4', this.txt4);
  }
  constructor() { }

  ngOnInit() {
  }

}
