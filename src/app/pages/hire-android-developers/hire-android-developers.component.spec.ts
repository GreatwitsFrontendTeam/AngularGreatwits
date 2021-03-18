import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireAndroidDevelopersComponent } from './hire-android-developers.component';

describe('HireAndroidDevelopersComponent', () => {
  let component: HireAndroidDevelopersComponent;
  let fixture: ComponentFixture<HireAndroidDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireAndroidDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireAndroidDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
