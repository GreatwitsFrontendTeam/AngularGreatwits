import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMernStackDeveloperComponent } from './hire-mern-stack-developer.component';

describe('HireMernStackDeveloperComponent', () => {
  let component: HireMernStackDeveloperComponent;
  let fixture: ComponentFixture<HireMernStackDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireMernStackDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireMernStackDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
