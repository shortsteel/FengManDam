import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirTemperatureComponent } from './reservoir-temperature.component';

describe('ReservoirTemperatureComponent', () => {
  let component: ReservoirTemperatureComponent;
  let fixture: ComponentFixture<ReservoirTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservoirTemperatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservoirTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
