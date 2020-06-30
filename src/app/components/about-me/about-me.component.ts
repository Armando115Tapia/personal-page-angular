import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  show_git: boolean = false;
  show_node: boolean = false;
  show_angular: boolean = false;
  show_mongo: boolean = false;
  show_aws: boolean = false;
  show_goodPractices: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  showDetails(tool) {
    switch (tool) {
      case 'git':
        this.show_git = !this.show_git;
        break;
      case 'node':
        this.show_node = !this.show_node;
        break;
      case 'angular':
        this.show_angular = !this.show_angular;
        break;
      case 'mongo':
        this.show_mongo = !this.show_mongo;
        break;
      case 'aws':
        this.show_aws = !this.show_aws;
        break;
      case 'goodPractices':
        this.show_goodPractices = !this.show_goodPractices;
        break;
    }
  }
  test() {
    console.log('loco');
  }
}
