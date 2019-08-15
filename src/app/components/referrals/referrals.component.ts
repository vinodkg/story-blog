import { Component, OnInit } from '@angular/core';
import { Referral } from '../../models/referral.model';
import { DataService } from 'src/app/services/dataservices/data.service';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {

  referrals : Referral[] = [];

  constructor(private dataServices: DataService) {
    this.referrals = dataServices.getReferrals();
   }

  ngOnInit() {
    
  }
  
  openReferral(referral, event){
    window.alert("Coming soon!");
  }
}
