import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockuiComponent } from './clockui.component';

describe('ClockuiComponent', () => {
  let component: ClockuiComponent;
  let fixture: ComponentFixture<ClockuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
