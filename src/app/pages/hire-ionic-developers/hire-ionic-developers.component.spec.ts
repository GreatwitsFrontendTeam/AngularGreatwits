import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireIonicDevelopersComponent } from './hire-ionic-developers.component';

describe('HireIonicDevelopersComponent', () => {
  let component: HireIonicDevelopersComponent;
  let fixture: ComponentFixture<HireIonicDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireIonicDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireIonicDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
