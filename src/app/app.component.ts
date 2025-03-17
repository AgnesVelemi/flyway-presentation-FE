import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flyway-presentation-FE';

  constructor(private translateService: TranslateService) {

    // javascriptes a navigator.language, ha nincs, akkor 'en' legyen default
    const userLang = navigator.language || 'en';
    const languageCode =  userLang.split('-')[0]; // en-US stb. esetén kiszedi
    this.translateService.setDefaultLang(languageCode);
    this.translateService.use(languageCode);
  }


}
