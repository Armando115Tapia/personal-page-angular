import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { InternationalizationService } from 'src/app/services/internationalization.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  // selectedLanguage = 'es';

  constructor(
    private _internationalizationService: InternationalizationService
  ) {}

  ngOnInit(): void {}
}
