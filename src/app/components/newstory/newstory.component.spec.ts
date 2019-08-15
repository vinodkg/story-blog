import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstoryComponent } from './newstory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoryDetailsComponent } from '../story-details/story-details.component';
import { DefaultTextPipe } from 'src/app/pipes/default-text/default-text.pipe';
import { SanitizeUrlPipe } from 'src/app/pipes/sanitizeUrl/sanitize-url.pipe';
import { AppRoutingModule } from '../../app-routing.module';
import { StoryListingComponent } from '../story-listing/story-listing.component';
import { ReferralsComponent } from '../referrals/referrals.component';
import { PositionsComponent } from '../positions/positions.component';
import { StoryCardComponent } from '../story-card/story-card.component';
import { StatusPipe } from 'src/app/pipes/status/status.pipe';
import { JobstatusPipe } from 'src/app/pipes/jobstatus/jobstatus.pipe';
import { ToDaysPipe } from 'src/app/pipes/to-days/to-days.pipe';


describe('NewstoryComponent', () => {
  let component: NewstoryComponent;
  let fixture: ComponentFixture<NewstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstoryComponent, StoryDetailsComponent, DefaultTextPipe, SanitizeUrlPipe, StoryListingComponent, ReferralsComponent, PositionsComponent, StoryCardComponent, StatusPipe, JobstatusPipe, ToDaysPipe, SanitizeUrlPipe ],
      imports : [
        ReactiveFormsModule,
        AppRoutingModule
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
