import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserRegisterSideBarComponent } from './admin-user-register-side-bar.component';

describe('AdminUserRegisterSideBarComponent', () => {
  let component: AdminUserRegisterSideBarComponent;
  let fixture: ComponentFixture<AdminUserRegisterSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUserRegisterSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUserRegisterSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
