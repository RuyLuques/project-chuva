import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { CardDarkComponent } from './components/carddark/carddark.component';
import { CardFormComponent } from './components/cardform/cardform.component';
import { ColumnsComponent } from './components/columns/columns.component';
import { DetailsComponent } from './components/details/details.component';
import { DiscussionsComponent } from './components/discussions/discussions.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { MsgsuccessComponent } from './msgsuccess/msgsuccess.component';
import { TopicsComponent } from './topics/topics.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'mgsuccess', component: MsgsuccessComponent },
  { path: 'test/resume', component: ResumeComponent },
  { path: 'test/columns', component: ColumnsComponent },
  { path: 'test/card', component: CardComponent },
  { path: 'test/cardform', component: CardFormComponent },
  { path: 'test/carddark', component: CardDarkComponent },
  { path: 'test/discussions', component: DiscussionsComponent },
  { path: 'test/details', component: DetailsComponent },
  { path: 'test/header', component: HeaderComponent },
  { path: 'test/sidenav', component: SidenavComponent },
  { path: 'test/footer', component: FooterComponent },
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(APP_ROUTES);
