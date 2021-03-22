import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItStrategyConsultingFirmsComponent } from './it-strategy-consulting-firms.component';

describe('ItStrategyConsultingFirmsComponent', () => {
  let component: ItStrategyConsultingFirmsComponent;
  let fixture: ComponentFixture<ItStrategyConsultingFirmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItStrategyConsultingFirmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItStrategyConsultingFirmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
