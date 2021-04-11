import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Santa3dCardComponent } from './santa3d-card.component';

describe('Santa3dCardComponent', () => {
  let component: Santa3dCardComponent;
  let fixture: ComponentFixture<Santa3dCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Santa3dCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Santa3dCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
