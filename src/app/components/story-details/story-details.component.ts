import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../models/story.modal';

@Component({
  selector: 'story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss']
})
export class StoryDetailsComponent implements OnInit {
  _storyDetails : Story = new Story();
  _isPreviewMode = false;

  
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
  constructor() { }

  ngOnInit() {
  }

}
