import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLogedComponent } from './nav-bar-loged.component';

describe('NavBarLogedComponent', () => {
  let component: NavBarLogedComponent;
  let fixture: ComponentFixture<NavBarLogedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarLogedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarLogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
