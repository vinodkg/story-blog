import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/story.modal';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'story-listing',
  templateUrl: './story-listing.component.html',
  styleUrls: ['./story-listing.component.scss']
})
export class StoryListingComponent implements OnInit {

  stories: Story[] = [];

  constructor(
    private router: Router,
    private DATA: DataService) {
    this.stories = DATA.getStories();
  }

  ngOnInit() {}

  showStory(story: Story, event: Event): void {
    this.DATA.viewStoryDetails(story);
    this.router.navigate(['/home' , story.id]);
  }
}
