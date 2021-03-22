import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireDevopsDevelopersComponent } from './hire-devops-developers.component';

describe('HireDevopsDevelopersComponent', () => {
  let component: HireDevopsDevelopersComponent;
  let fixture: ComponentFixture<HireDevopsDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireDevopsDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireDevopsDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
