import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasinOverviewComponent } from './basin-overview.component';

describe('BasinOverviewComponent', () => {
  let component: BasinOverviewComponent;
  let fixture: ComponentFixture<BasinOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasinOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasinOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
