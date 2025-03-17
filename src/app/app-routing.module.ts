import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CvHuComponent} from './components/cv-hu/cv-hu.component';
import {CvEnComponent} from './components/cv-en/cv-en.component';
import {CvDeComponent} from './components/cv-de/cv-de.component';
import {IntroComponent} from './components/intro/intro.component';
import {HowTodoComponent} from './components/how-todo/how-todo.component';
import {QuickstartComponent} from './components/quickstart/quickstart.component';
import {AboutThisProjectComponent} from './components/about-this-project/about-this-project.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'intro', component: IntroComponent},
  {path: 'quickstart', component: QuickstartComponent},
  {path: 'know-how', component: HowTodoComponent},
  {path: 'cvhu', component: CvHuComponent},
  {path: 'cven', component: CvEnComponent},
  {path: 'cvde', component: CvDeComponent},
  {path: 'about-this-project', component: AboutThisProjectComponent},
  {path: '**', component: IntroComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
