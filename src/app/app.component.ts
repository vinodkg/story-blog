import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'story-blog';
  currentTab: String = "home";

  navigateTo(selectedTab) {
    this.currentTab = selectedTab;
  }
}
