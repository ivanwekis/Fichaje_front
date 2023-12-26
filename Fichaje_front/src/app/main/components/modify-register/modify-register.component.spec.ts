import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRegisterComponent } from './modify-register.component';

describe('ModifyRegisterComponent', () => {
  let component: ModifyRegisterComponent;
  let fixture: ComponentFixture<ModifyRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifyRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
