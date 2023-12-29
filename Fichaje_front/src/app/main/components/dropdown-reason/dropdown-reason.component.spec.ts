import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownReasonComponent } from './dropdown-reason.component';

describe('DropdownReasonComponent', () => {
  let component: DropdownReasonComponent;
  let fixture: ComponentFixture<DropdownReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownReasonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
