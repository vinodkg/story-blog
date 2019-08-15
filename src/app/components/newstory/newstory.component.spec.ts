import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstoryComponent } from './newstory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoryDetailsComponent } from '../story-details/story-details.component';
import { DefaultTextPipe } from 'src/app/pipes/default-text/default-text.pipe';

describe('NewstoryComponent', () => {
  let component: NewstoryComponent;
  let fixture: ComponentFixture<NewstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstoryComponent, StoryDetailsComponent, DefaultTextPipe ],
      imports : [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
