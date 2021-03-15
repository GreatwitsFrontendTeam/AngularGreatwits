import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMeanStackDeveloperComponent } from './hire-mean-stack-developer.component';

describe('HireMeanStackDeveloperComponent', () => {
  let component: HireMeanStackDeveloperComponent;
  let fixture: ComponentFixture<HireMeanStackDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireMeanStackDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireMeanStackDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
