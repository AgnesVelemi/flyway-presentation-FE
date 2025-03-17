import {NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {IntroComponent} from './components/intro/intro.component';
import {QuickstartComponent} from './components/quickstart/quickstart.component';
import {HowTodoComponent} from './components/how-todo/how-todo.component';
import {AboutThisProjectComponent} from './components/about-this-project/about-this-project.component';
import {CvHuComponent} from './components/cv-hu/cv-hu.component';
import {CvEnComponent} from './components/cv-en/cv-en.component';
import {CvDeComponent} from './components/cv-de/cv-de.component';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {HttpClient, HttpClientModule} from '@angular/common/http';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');           // <- public/i18n/*.json
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    QuickstartComponent,
    HowTodoComponent,
    AboutThisProjectComponent,
    CvHuComponent,
    CvEnComponent,
    CvDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })


  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
