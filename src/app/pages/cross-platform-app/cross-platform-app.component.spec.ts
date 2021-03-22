import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossPlatformAppComponent } from './cross-platform-app.component';

describe('CrossPlatformAppComponent', () => {
  let component: CrossPlatformAppComponent;
  let fixture: ComponentFixture<CrossPlatformAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossPlatformAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossPlatformAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
