import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUserDataComponent } from './modify-user-data.component';

describe('ModifyUserDataComponent', () => {
  let component: ModifyUserDataComponent;
  let fixture: ComponentFixture<ModifyUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifyUserDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
