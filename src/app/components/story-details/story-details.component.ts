import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../models/story.modal';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss']
})
export class StoryDetailsComponent implements OnInit {
  _storyDetails : Story = new Story();
  _isPreviewMode = false;

  constructor(private DATA: DataService) {
    this.DATA.viewStoryObs.subscribe((story: Story) => {
        this.storyDetails = story;
    });
  }

  @Input("story") set storyDetails(value){
    this._storyDetails = value;
  }

  get storyDetails(){
    return this._storyDetails;
  }

  @Input("previewMode") set isPreviewMode(value){
    this._isPreviewMode = false;
    if(value){
      this._isPreviewMode = value;
    }
  }

  get isPreviewMode(){
    return this._isPreviewMode;
  }

  ngOnInit() {
    if(this.isPreviewMode){
        this.storyDetails = new Story(true);
    }else{
      if(this.DATA.currentStory){
        this.storyDetails = this.DATA.currentStory;
      }else{
        this.storyDetails = new Story();
      }
    }
  }
}
