import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoDropdownComponent } from './user-info-dropdown.component';

describe('UserInfoDropdownComponent', () => {
  let component: UserInfoDropdownComponent;
  let fixture: ComponentFixture<UserInfoDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
