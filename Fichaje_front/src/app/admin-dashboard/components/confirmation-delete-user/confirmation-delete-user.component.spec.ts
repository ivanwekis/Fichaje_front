import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDeleteUserComponent } from './confirmation-delete-user.component';

describe('ConfirmationDeleteUserComponent', () => {
  let component: ConfirmationDeleteUserComponent;
  let fixture: ComponentFixture<ConfirmationDeleteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationDeleteUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
