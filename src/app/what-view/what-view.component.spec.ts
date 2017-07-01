import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatViewComponent } from './what-view.component';

describe('WhatViewComponent', () => {
  let component: WhatViewComponent;
  let fixture: ComponentFixture<WhatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
