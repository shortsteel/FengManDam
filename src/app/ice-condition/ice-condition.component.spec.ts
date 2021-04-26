import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceConditionComponent } from './ice-condition.component';

describe('IceConditionComponent', () => {
  let component: IceConditionComponent;
  let fixture: ComponentFixture<IceConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IceConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
