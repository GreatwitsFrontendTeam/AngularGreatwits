import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireVuejsDevelopersComponent } from './hire-vuejs-developers.component';

describe('HireVuejsDevelopersComponent', () => {
  let component: HireVuejsDevelopersComponent;
  let fixture: ComponentFixture<HireVuejsDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireVuejsDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireVuejsDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
