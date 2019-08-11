import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../models/story.modal';

@Component({
  selector: 'story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss']
})
export class StoryDetailsComponent implements OnInit {
  storyDetails : Story = new Story();

  constructor() { }

  ngOnInit() {
  }

}
