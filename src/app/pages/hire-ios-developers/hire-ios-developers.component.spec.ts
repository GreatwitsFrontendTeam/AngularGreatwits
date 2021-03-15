import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireIosDevelopersComponent } from './hire-ios-developers.component';

describe('HireIosDevelopersComponent', () => {
  let component: HireIosDevelopersComponent;
  let fixture: ComponentFixture<HireIosDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireIosDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireIosDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
