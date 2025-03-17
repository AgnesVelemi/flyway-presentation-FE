import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private translateService: TranslateService, private http: HttpClient) {

    // javascriptes a navigator.language, ha nincs, akkor 'en' legyen default
    const userLang = navigator.language || 'en';
    const languageCode =  userLang.split('-')[0]; // en-US stb. esetén kiszedi
    this.translateService.setDefaultLang(languageCode);
    this.translateService.use(languageCode);
  }

  translateEnText(lang: string) {
    this.translateText(lang);
  }

  translateHuText(lang: string) {
    this.translateText(lang);
  }

  translateDeText(lang: string) {
    this.translateText(lang);
  }

  translateText(lang :string){
    console.log("hahó " + lang);
    this.translateService.use(lang);  // állítsd át erre a nyelvet
    this.http.get(`/public/i18n/${lang}.json`).subscribe();
  }
}
