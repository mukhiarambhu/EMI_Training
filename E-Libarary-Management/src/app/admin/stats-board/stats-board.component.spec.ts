import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBoardComponent } from './stats-board.component';

describe('StatsBoardComponent', () => {
  let component: StatsBoardComponent;
  let fixture: ComponentFixture<StatsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
