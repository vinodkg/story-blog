import { Component, OnInit } from '@angular/core';
import { Referral } from '../../models/referral.model';
import { DataService } from '../../services/data/data.service';
import { UtilityService } from '../../services/utilities/utility.service';
import { ConstantsService } from '../../services/constants/constants.service';

@Component({
  selector: 'referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {

  referrals: Referral[] = [];

  constructor(
      private DATA: DataService,
      private UTILS: UtilityService,
      private CONSTANTS: ConstantsService) {
        this.referrals = DATA.getReferrals();
   }

  ngOnInit() {}

  openReferral(referral: Referral, event: Event) {
    this.UTILS.LOGGER.LOG_INFO(referral);
    this.UTILS.SHOW_MESSAGE(this.CONSTANTS.MESSAGES.PENDING_FEATURE);
  }
}
