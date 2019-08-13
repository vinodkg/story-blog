import { Component, OnInit } from '@angular/core';
import { Referral } from '../../models/referral.model';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {

  referrals : Referral[] = [];

  constructor() { }

  ngOnInit() {
    for(let i=0;i<10;i++){
      this.referrals.push(new Referral());
    }
  }
}
