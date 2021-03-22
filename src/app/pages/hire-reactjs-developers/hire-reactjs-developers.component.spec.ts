import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireReactjsDevelopersComponent } from './hire-reactjs-developers.component';

describe('HireReactjsDevelopersComponent', () => {
  let component: HireReactjsDevelopersComponent;
  let fixture: ComponentFixture<HireReactjsDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireReactjsDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireReactjsDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
