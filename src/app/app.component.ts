import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'story-blog';
  currentTab: String = "home";

  constructor(private router: Router){
    this.navigateToHome();
  }

  navigateToHome(event?){
    this.router.navigate(['']);
  }

  navigateTo(selectedTab) {
    this.currentTab = selectedTab;
    this.router.navigate([this.currentTab]);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
}
