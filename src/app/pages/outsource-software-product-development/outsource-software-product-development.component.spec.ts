import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourceSoftwareProductDevelopmentComponent } from './outsource-software-product-development.component';

describe('OutsourceSoftwareProductDevelopmentComponent', () => {
  let component: OutsourceSoftwareProductDevelopmentComponent;
  let fixture: ComponentFixture<OutsourceSoftwareProductDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsourceSoftwareProductDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsourceSoftwareProductDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
