import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../models/story.modal';

@Component({
  selector: 'story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {

  @Input("details") cardDetails : Story = new Story(); 

  constructor() { }

  ngOnInit() {
  }

}
