import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightShiftComponent } from './night-shift.component';

describe('NightShiftComponent', () => {
  let component: NightShiftComponent;
  let fixture: ComponentFixture<NightShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NightShiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NightShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
