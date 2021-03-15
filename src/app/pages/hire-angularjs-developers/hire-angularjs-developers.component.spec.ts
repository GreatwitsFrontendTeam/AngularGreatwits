import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireAngularjsDevelopersComponent } from './hire-angularjs-developers.component';

describe('HireAngularjsDevelopersComponent', () => {
  let component: HireAngularjsDevelopersComponent;
  let fixture: ComponentFixture<HireAngularjsDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireAngularjsDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireAngularjsDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
