import { Injectable } from '@angular/core';

import { Options } from './options';
import { INITIAL, SECONDARY } from './MOCK_DATA';

@Injectable()
export class DataService {
	
  getInitial(): Options[] {
    return INITIAL;
  }

  getSecondary(): Options[] {
    return SECONDARY;
  }


  constructor() { }

}