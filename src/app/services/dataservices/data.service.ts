import { Injectable } from '@angular/core';
import { STORIES } from '../../mocks/stories.mock';
import { REFERRALS } from '../../mocks/referrals.mock';
import { POSITIONS } from '../../mocks/positions.mock';
import { Story } from 'src/app/models/story.modal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private viewStory = new Subject<Story>();

  viewStoryObs = this.viewStory.asObservable();
  currentStory: Story;

  constructor() { }

  getStories(){
    return STORIES;
  }

  addStories(newStory: Story) {
    STORIES.unshift(newStory);
  }



  viewStoryDetails(story: Story){
    this.currentStory = story;
    this.viewStory.next(story);
  }

  getReferrals(){
    return REFERRALS;
  }

  getPositions(){
    return POSITIONS;
  }
}
