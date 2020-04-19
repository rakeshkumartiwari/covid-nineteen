import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatewiseRecordsComponent } from './statewise-records.component';

describe('StatewiseRecordsComponent', () => {
  let component: StatewiseRecordsComponent;
  let fixture: ComponentFixture<StatewiseRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatewiseRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatewiseRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
