import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSoftwareDevelopmentComponent } from './media-software-development.component';

describe('MediaSoftwareDevelopmentComponent', () => {
  let component: MediaSoftwareDevelopmentComponent;
  let fixture: ComponentFixture<MediaSoftwareDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaSoftwareDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaSoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
