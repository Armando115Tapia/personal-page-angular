import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  show_git: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  showDetails(tool) {
    switch (tool) {
      case 'git':
        this.show_git = !this.show_git;
        break;
    }
  }
  test() {
    console.log('loco');
  }
}
