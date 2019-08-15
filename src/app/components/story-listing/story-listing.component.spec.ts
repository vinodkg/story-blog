import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryListingComponent } from './story-listing.component';
import { StoryCardComponent } from '../story-card/story-card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StoryDetailsComponent } from '../story-details/story-details.component';
import { ReferralsComponent } from '../referrals/referrals.component';
import { PositionsComponent } from '../positions/positions.component';
import { NewstoryComponent } from '../newstory/newstory.component';
import { DefaultTextPipe } from 'src/app/pipes/default-text/default-text.pipe';
import { StatusPipe } from 'src/app/pipes/status/status.pipe';
import { JobstatusPipe } from 'src/app/pipes/jobstatus/jobstatus.pipe';
import { ToDaysPipe } from 'src/app/pipes/to-days/to-days.pipe';
import { ReactiveFormsModule } from '@angular/forms';

describe('StoryListingComponent', () => {
  let component: StoryListingComponent;
  let fixture: ComponentFixture<StoryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        AppRoutingModule,
        ReactiveFormsModule
      ],
      declarations: [ StoryListingComponent, StoryCardComponent, StoryDetailsComponent, ReferralsComponent, PositionsComponent, PositionsComponent, NewstoryComponent, DefaultTextPipe, StatusPipe, JobstatusPipe, ToDaysPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
