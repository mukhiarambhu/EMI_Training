import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRequestedBookComponent } from './user-requested-book.component';

describe('UserRequestedBookComponent', () => {
  let component: UserRequestedBookComponent;
  let fixture: ComponentFixture<UserRequestedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRequestedBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRequestedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
