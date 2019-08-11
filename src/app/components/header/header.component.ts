import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() activeTab: String;
  @Output() menuSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.activeTab);
  }

  headerMenuClicked(selectedMenu){
    this.activeTab = selectedMenu;
    this.menuSelected.emit(selectedMenu);
  }

}
