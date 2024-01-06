import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarModifyUserConfigComponent } from './navbar-modify-user-config.component';

describe('NavbarModifyUserConfigComponent', () => {
  let component: NavbarModifyUserConfigComponent;
  let fixture: ComponentFixture<NavbarModifyUserConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarModifyUserConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarModifyUserConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
