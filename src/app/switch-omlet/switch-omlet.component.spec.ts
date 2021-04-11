import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchOmletComponent } from './switch-omlet.component';

describe('SwitchOmletComponent', () => {
  let component: SwitchOmletComponent;
  let fixture: ComponentFixture<SwitchOmletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchOmletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchOmletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
