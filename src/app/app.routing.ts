import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './topics/topics.component';
import { MsgsuccessComponent } from './msgsuccess/msgsuccess.component';

import { ResumeComponent } from './components/resume/resume.component';
import { ColumnsComponent } from './components/columns/columns.component';
import { CardComponent } from './components/card/card.component';
import { CardFormComponent } from './components/cardform/cardform.component';
import {DiscussionsComponent} from './components/discussions/discussions.component'

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'mgsuccess', component: MsgsuccessComponent },
  { path: 'test/resume', component: ResumeComponent },
  { path: 'test/columns', component: ColumnsComponent },
  { path: 'test/card', component: CardComponent },
  { path: 'test/cardform', component: CardFormComponent },
  { path: 'test/discussions', component: DiscussionsComponent },
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(APP_ROUTES);
