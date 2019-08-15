import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'story-blog';
  currentTab: String = "home";

  constructor(private router: Router){
    this.router.navigate(['']);
  }

  navigateTo(selectedTab) {
    this.currentTab = selectedTab;
    this.router.navigate([this.currentTab]);
  }
}
