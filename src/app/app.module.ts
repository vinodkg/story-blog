import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryListingComponent } from './components/story-listing/story-listing.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { HeaderComponent } from './components/header/header.component';
import { PositionsComponent } from './components/positions/positions.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ReferralsComponent } from './components/referrals/referrals.component';
import { StatusPipe } from './pipes/status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StoryListingComponent,
    StoryDetailsComponent,
    StoryCardComponent,
    HeaderComponent,
    PositionsComponent,
    AchievementsComponent,
    ReferralsComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
