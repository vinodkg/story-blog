import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../models/story.modal';
import { ConstantsService } from 'src/app/services/constants/constants.service';

@Component({
  selector: 'story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {

  @Input('details') cardDetails: Story = new Story();

  constructor(
    private CONSTANTS: ConstantsService
  ) { }

  ngOnInit() {}

  showPlachoder(event) {
    event.target.src = this.CONSTANTS.DEFAULT_IMAGES.STORY_COVER;
  }

}
