import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassFormComponent } from './glass-form.component';

describe('GlassFormComponent', () => {
  let component: GlassFormComponent;
  let fixture: ComponentFixture<GlassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
