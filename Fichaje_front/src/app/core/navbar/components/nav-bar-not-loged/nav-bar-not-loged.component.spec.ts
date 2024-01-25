import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarNotLogedComponent } from './nav-bar-not-loged.component';

describe('NavBarNotLogedComponent', () => {
  let component: NavBarNotLogedComponent;
  let fixture: ComponentFixture<NavBarNotLogedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarNotLogedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarNotLogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
