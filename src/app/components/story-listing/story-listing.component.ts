import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/story.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'story-listing',
  templateUrl: './story-listing.component.html',
  styleUrls: ['./story-listing.component.scss']
})
export class StoryListingComponent implements OnInit {

  stories : Story[] = [];

  constructor(private router: Router) { 
    for(let i=0;i<10;i++){
      this.stories.push(new Story());
    }
  }

  ngOnInit() {
  }

  showStory(story, event) {
    this.router.navigate(["home/" + story.id]);
  }
}
