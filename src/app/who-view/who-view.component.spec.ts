import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoViewComponent } from './who-view.component';

describe('WhoViewComponent', () => {
  let component: WhoViewComponent;
  let fixture: ComponentFixture<WhoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
