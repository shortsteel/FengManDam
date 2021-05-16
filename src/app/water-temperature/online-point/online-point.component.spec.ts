import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePointComponent } from './online-point.component';

describe('OnlinePointComponent', () => {
  let component: OnlinePointComponent;
  let fixture: ComponentFixture<OnlinePointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinePointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
