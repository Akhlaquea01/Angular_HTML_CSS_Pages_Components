import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenPageComponent } from './golden-page.component';

describe('GoldenPageComponent', () => {
  let component: GoldenPageComponent;
  let fixture: ComponentFixture<GoldenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
