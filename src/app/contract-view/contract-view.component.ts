import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.css']
})
export class ContractViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  IAm: string = localStorage.getItem('selectedWhoAmI');
  TheyAre: string = localStorage.getItem('selectedWhoAreThey');
  Relationship: string = localStorage.getItem('selectedRelationship');
  IsContract: string = localStorage.getItem('selectedIsContract');
  iLiveIn: string = localStorage.getItem('iLiveIn');
  theyLiveIn: string = localStorage.getItem('theyLiveIn');
  tookPlaceIn: string = localStorage.getItem('tookPlaceIn');
  contractStart: string = localStorage.getItem('contractStart');
  issueStart: string = localStorage.getItem('issueStart');
  issueFound: string = localStorage.getItem('issueFound');
  inForce: string = localStorage.getItem('inForce');
  breach: string = localStorage.getItem('breach');
  loss: string = localStorage.getItem('loss');
  remedies: string = localStorage.getItem('remedies');

  explanation: string = localStorage.getItem('explanation');
  explanation2: string = localStorage.getItem('explanation2');
  explanation3: string = localStorage.getItem('explanation3');
  explanation4: string = localStorage.getItem('explanation4');

  myName: string = 'Mr C Emptor';
  theirName: string = 'Mr D Lict';
}
