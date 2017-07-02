import { Component, OnInit } from '@angular/core';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';

@Component({
  selector: 'app-when-view',
  templateUrl: './when-view.component.html',
  styleUrls: ['./when-view.component.css']
})
export class WhenViewComponent implements OnInit {

   private myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
        sunHighlight: false,
    };

  constructor() { }

  ngOnInit() {
  }

  onDateChanged(event: IMyDateModel) {
    localStorage.setItem('contractStart', event.formatted);
  }

  onDateChanged2(event: IMyDateModel) {
    localStorage.setItem('issueStart', event.formatted);
  }

  onDateChanged3(event: IMyDateModel) {
    localStorage.setItem('issueFound', event.formatted);
  }

}
