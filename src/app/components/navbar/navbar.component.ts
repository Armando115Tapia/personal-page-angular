import { Component, OnInit } from '@angular/core';
import { InternationalizationService } from 'src/app/services/internationalization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private _internationalizationService: InternationalizationService
  ) {}

  ngOnInit(): void {}
  changeLanguage(lang) {
    this._internationalizationService.setLanguage(lang);
  }
}
