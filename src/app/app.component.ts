import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Head } from './models/head.model';
import { UtilityService } from './services/utilities/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'story-blog';
  currentTab: Head = {
    name : 'Home',
    id : 'home'
  };

  constructor(private router: Router, private UTILS: UtilityService) {}

  navigateToHome(event?) {
    this.router.navigate(['']);
  }

  navigateTo(selectedTab: Head) {
    this.currentTab = selectedTab;
    this.router.navigate([this.currentTab.id]);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      this.UTILS.SCROLL_TO_TOP();
    });
  }
}
