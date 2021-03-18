import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationElearningSoftwareDevelopmentComponent } from './education-elearning-software-development.component';

describe('EducationElearningSoftwareDevelopmentComponent', () => {
  let component: EducationElearningSoftwareDevelopmentComponent;
  let fixture: ComponentFixture<EducationElearningSoftwareDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationElearningSoftwareDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationElearningSoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
