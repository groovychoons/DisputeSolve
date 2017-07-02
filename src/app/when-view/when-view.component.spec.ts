import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenViewComponent } from './when-view.component';

describe('WhenViewComponent', () => {
  let component: WhenViewComponent;
  let fixture: ComponentFixture<WhenViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
