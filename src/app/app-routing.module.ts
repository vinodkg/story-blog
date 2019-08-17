import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryListingComponent } from './components/story-listing/story-listing.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { ReferralsComponent } from './components/referrals/referrals.component';
import { PositionsComponent } from './components/positions/positions.component';
import { NewstoryComponent } from './components/newstory/newstory.component';

const routes: Routes = [
  {"path" : "", redirectTo: "home", pathMatch: "full"},
  {"path": "home", "component": StoryListingComponent},
  {"path": "home/:storyid", "component": StoryDetailsComponent},
  {"path" : "referrals", "component" : ReferralsComponent},
  {"path" : "positions", "component" : PositionsComponent},
  {"path" : "newstory", "component" : NewstoryComponent},
  {"path" : "**", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
