import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './topics/topics.component';
import { MsgsuccessComponent } from './msgsuccess/msgsuccess.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'mgsuccess', component: MsgsuccessComponent },
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(APP_ROUTES);
