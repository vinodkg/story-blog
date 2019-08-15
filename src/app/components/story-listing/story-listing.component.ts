import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/story.modal';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataservices/data.service';

@Component({
  selector: 'story-listing',
  templateUrl: './story-listing.component.html',
  styleUrls: ['./story-listing.component.scss']
})
export class StoryListingComponent implements OnInit {

  stories : Story[] = [];

  constructor(private router: Router, private dataService: DataService) { 
    this.stories = dataService.getStories();
  }

  ngOnInit() {
  }

  showStory(story, event) {
    this.dataService.viewStoryDetails(story);
    this.router.navigate(["home/" + story.id]);
  }
}
