import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-view',
  templateUrl: './why-view.component.html',
  styleUrls: ['./why-view.component.css']
})
export class WhyViewComponent implements OnInit {

  txt: string = '';

  constructor() { }

  ngOnInit() {
  }


  onChange($event, value) {

    this.txt = this.txt + '\r\n - ' + value;
    localStorage.setItem('remedies', this.txt);
  }

}
