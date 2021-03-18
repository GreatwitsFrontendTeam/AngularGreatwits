import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireFrontendDevelopersComponent } from './hire-frontend-developers.component';

describe('HireFrontendDevelopersComponent', () => {
  let component: HireFrontendDevelopersComponent;
  let fixture: ComponentFixture<HireFrontendDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireFrontendDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireFrontendDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
