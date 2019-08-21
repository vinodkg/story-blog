import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryListingComponent } from './components/story-listing/story-listing.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { HeaderComponent } from './components/header/header.component';
import { PositionsComponent } from './components/positions/positions.component';
import { ReferralsComponent } from './components/referrals/referrals.component';
import { StatusPipe } from './pipes/status/status.pipe';
import { JobstatusPipe } from './pipes/jobstatus/jobstatus.pipe';
import { ToDaysPipe } from './pipes/to-days/to-days.pipe';
import { NewstoryComponent } from './components/newstory/newstory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultTextPipe } from './pipes/default-text/default-text.pipe';
import { SanitizeUrlPipe } from './pipes/sanitizeUrl/sanitize-url.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StoryListingComponent,
    StoryDetailsComponent,
    StoryCardComponent,
    HeaderComponent,
    PositionsComponent,
    ReferralsComponent,
    StatusPipe,
    JobstatusPipe,
    ToDaysPipe,
    NewstoryComponent,
    DefaultTextPipe,
    SanitizeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
