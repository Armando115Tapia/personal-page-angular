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
  clg() {
    console.log('test');
  }
}
