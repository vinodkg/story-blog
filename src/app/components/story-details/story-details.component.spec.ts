import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDetailsComponent } from './story-details.component';
import { DefaultTextPipe } from '../../pipes/default-text/default-text.pipe';

describe('StoryDetailsComponent', () => {
  let component: StoryDetailsComponent;
  let fixture: ComponentFixture<StoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultTextPipe, StoryDetailsComponent ]
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
