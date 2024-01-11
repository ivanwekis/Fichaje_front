import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTablePaginationComponent } from './users-table-pagination.component';

describe('UsersTablePaginationComponent', () => {
  let component: UsersTablePaginationComponent;
  let fixture: ComponentFixture<UsersTablePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersTablePaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
