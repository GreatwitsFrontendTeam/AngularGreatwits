import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveCompaniesSoftwareDevelopmentComponent } from './automotive-companies-software-development.component';

describe('AutomotiveCompaniesSoftwareDevelopmentComponent', () => {
  let component: AutomotiveCompaniesSoftwareDevelopmentComponent;
  let fixture: ComponentFixture<AutomotiveCompaniesSoftwareDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveCompaniesSoftwareDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomotiveCompaniesSoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
