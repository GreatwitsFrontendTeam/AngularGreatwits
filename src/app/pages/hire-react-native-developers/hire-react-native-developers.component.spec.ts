import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireReactNativeDevelopersComponent } from './hire-react-native-developers.component';

describe('HireReactNativeDevelopersComponent', () => {
  let component: HireReactNativeDevelopersComponent;
  let fixture: ComponentFixture<HireReactNativeDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireReactNativeDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireReactNativeDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
