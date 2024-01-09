import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByUsersComponent } from './order-by-users.component';

describe('OrderByUsersComponent', () => {
  let component: OrderByUsersComponent;
  let fixture: ComponentFixture<OrderByUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderByUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderByUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
