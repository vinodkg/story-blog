import { Component, OnInit } from '@angular/core';
import { Position } from '../../models/position.model';
import { DataService } from '../../services/data/data.service';
import { UtilityService } from '../../services/utilities/utility.service';
import { ConstantsService } from '../../services/constants/constants.service';

@Component({
  selector: 'positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {

  positions: Position[] = [];
  constructor(
    private DATA: DataService,
    private UTILS: UtilityService,
    private CONSTANTS: ConstantsService) {
      this.positions = this.DATA.getPositions();
  }

  ngOnInit() {
  }

  openPostionDetails(position, event) {
    this.UTILS.LOGGER.LOG_INFO(position);
    this.UTILS.SHOW_MESSAGE(this.CONSTANTS.MESSAGES.PENDING_FEATURE);
  }
}
