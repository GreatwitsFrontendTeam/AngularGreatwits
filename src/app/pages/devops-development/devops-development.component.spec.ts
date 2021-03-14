import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsDevelopmentComponent } from './devops-development.component';

describe('DevopsDevelopmentComponent', () => {
  let component: DevopsDevelopmentComponent;
  let fixture: ComponentFixture<DevopsDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopsDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
