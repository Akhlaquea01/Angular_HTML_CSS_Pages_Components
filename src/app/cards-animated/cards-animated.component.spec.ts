import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAnimatedComponent } from './cards-animated.component';

describe('CardsAnimatedComponent', () => {
  let component: CardsAnimatedComponent;
  let fixture: ComponentFixture<CardsAnimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsAnimatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
