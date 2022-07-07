import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookModalBoxComponent } from './add-book-modal-box.component';

describe('AddBookModalBoxComponent', () => {
  let component: AddBookModalBoxComponent;
  let fixture: ComponentFixture<AddBookModalBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookModalBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookModalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
