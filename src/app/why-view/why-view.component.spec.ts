import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyViewComponent } from './why-view.component';

describe('WhyViewComponent', () => {
  let component: WhyViewComponent;
  let fixture: ComponentFixture<WhyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
