import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuroraUiComponent } from './aurora-ui.component';

describe('AuroraUiComponent', () => {
  let component: AuroraUiComponent;
  let fixture: ComponentFixture<AuroraUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuroraUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuroraUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
