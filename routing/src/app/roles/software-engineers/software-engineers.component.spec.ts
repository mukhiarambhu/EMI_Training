import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEngineersComponent } from './software-engineers.component';

describe('SoftwareEngineersComponent', () => {
  let component: SoftwareEngineersComponent;
  let fixture: ComponentFixture<SoftwareEngineersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareEngineersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareEngineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
