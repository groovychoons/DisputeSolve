import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereViewComponent } from './where-view.component';

describe('WhereViewComponent', () => {
  let component: WhereViewComponent;
  let fixture: ComponentFixture<WhereViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
