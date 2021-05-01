import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringPlanComponent } from './monitoring-plan.component';

describe('MonitoringPlanComponent', () => {
  let component: MonitoringPlanComponent;
  let fixture: ComponentFixture<MonitoringPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoringPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
