import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Head } from '../../models/head.model';
import { ConstantsService } from '../../services/constants/constants.service';
import { UtilityService } from '../../services/utilities/utility.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Input() activeTab: Head = new Head();
  @Input() headerTabConfig : Head[] = [];
  @Output() menuSelected = new EventEmitter<Head>();
 
  constructor(
    private CONSTANTS: ConstantsService,
    private UTILS: UtilityService,
    private DATA: DataService
    ) { 
      this.headerTabConfig = this.DATA.getHeaders();
  }
  
  companyLogo = this.CONSTANTS.DEFAULT_IMAGES.COMPANY_LOGO;

  ngOnInit() {}

  headerMenuClicked(selectedMenu, event){
    this.UTILS.LOGGER.LOG_DEBUG(selectedMenu);
    this.activeTab = selectedMenu.id;
    this.menuSelected.emit(selectedMenu);
  }
}
