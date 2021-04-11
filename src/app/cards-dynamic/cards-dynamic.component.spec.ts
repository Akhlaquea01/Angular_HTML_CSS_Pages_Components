import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDynamicComponent } from './cards-dynamic.component';

describe('CardsDynamicComponent', () => {
  let component: CardsDynamicComponent;
  let fixture: ComponentFixture<CardsDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
