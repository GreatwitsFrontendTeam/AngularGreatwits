import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireNodejsDevelopersComponent } from './hire-nodejs-developers.component';

describe('HireNodejsDevelopersComponent', () => {
  let component: HireNodejsDevelopersComponent;
  let fixture: ComponentFixture<HireNodejsDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireNodejsDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireNodejsDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
