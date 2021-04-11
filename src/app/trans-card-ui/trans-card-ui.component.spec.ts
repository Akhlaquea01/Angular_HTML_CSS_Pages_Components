import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransCardUiComponent } from './trans-card-ui.component';

describe('TransCardUiComponent', () => {
  let component: TransCardUiComponent;
  let fixture: ComponentFixture<TransCardUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransCardUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransCardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
