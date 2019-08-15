import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDetailsComponent } from './story-details.component';
import { DefaultTextPipe } from '../../pipes/default-text/default-text.pipe';
import { SanitizeUrlPipe } from 'src/app/pipes/sanitizeUrl/sanitize-url.pipe';

describe('StoryDetailsComponent', () => {
  let component: StoryDetailsComponent;
  let fixture: ComponentFixture<StoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultTextPipe, StoryDetailsComponent, SanitizeUrlPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
