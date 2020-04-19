import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidRecordComponent } from './covid-record.component';

describe('CovidRecordComponent', () => {
  let component: CovidRecordComponent;
  let fixture: ComponentFixture<CovidRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
