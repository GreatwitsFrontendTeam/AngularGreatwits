import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticTransportationSoftwareDevelopmentComponent } from './logistic-transportation-software-development.component';

describe('LogisticTransportationSoftwareDevelopmentComponent', () => {
  let component: LogisticTransportationSoftwareDevelopmentComponent;
  let fixture: ComponentFixture<LogisticTransportationSoftwareDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticTransportationSoftwareDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticTransportationSoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
