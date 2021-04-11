import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWhiteComponent } from './form-white.component';

describe('FormWhiteComponent', () => {
  let component: FormWhiteComponent;
  let fixture: ComponentFixture<FormWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWhiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
