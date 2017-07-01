import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalViewComponent } from './legal-view.component';

describe('LegalViewComponent', () => {
  let component: LegalViewComponent;
  let fixture: ComponentFixture<LegalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
