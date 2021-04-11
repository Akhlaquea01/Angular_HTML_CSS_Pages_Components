import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrootCardUiComponent } from './groot-card-ui.component';

describe('GrootCardUiComponent', () => {
  let component: GrootCardUiComponent;
  let fixture: ComponentFixture<GrootCardUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrootCardUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrootCardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
