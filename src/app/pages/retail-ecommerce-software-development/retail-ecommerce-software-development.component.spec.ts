import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailEcommerceSoftwareDevelopmentComponent } from './retail-ecommerce-software-development.component';

describe('RetailEcommerceSoftwareDevelopmentComponent', () => {
  let component: RetailEcommerceSoftwareDevelopmentComponent;
  let fixture: ComponentFixture<RetailEcommerceSoftwareDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailEcommerceSoftwareDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailEcommerceSoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
