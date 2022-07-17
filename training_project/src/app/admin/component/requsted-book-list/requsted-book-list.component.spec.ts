import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequstedBookListComponent } from './requsted-book-list.component';

describe('RequstedBookListComponent', () => {
  let component: RequstedBookListComponent;
  let fixture: ComponentFixture<RequstedBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequstedBookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequstedBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
