import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirninComponent } from './sirnin.component';

describe('SirninComponent', () => {
  let component: SirninComponent;
  let fixture: ComponentFixture<SirninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SirninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SirninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
