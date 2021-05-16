import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirVerticalComponent } from './reservoir-vertical.component';

describe('ReservoirVerticalComponent', () => {
  let component: ReservoirVerticalComponent;
  let fixture: ComponentFixture<ReservoirVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservoirVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservoirVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
