import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { TopicsComponent } from './topics/topics.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './components/details/details.component';
import { ResumeComponent } from './components/resume/resume.component';
import { DiscussionsComponent } from './components/discussions/discussions.component';
import { CardComponent } from './components/card/card.component';
import { CardDarkComponent } from './components/carddark/carddark.component';
import { MsgsuccessComponent } from './msgsuccess/msgsuccess.component';
import { ColumnsComponent } from './components/columns/columns.component';
import { LogoComponent } from './components/logo/logo.component';
import { CardFormComponent } from './components/cardform/cardform.component';
import { FormMessageComponent } from './components/form/form.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    TopicsComponent,
    SidenavComponent,
    FooterComponent,
    HeaderComponent,
    DetailsComponent,
    ResumeComponent,
    DiscussionsComponent,
    CardComponent,
    CardDarkComponent,
    MsgsuccessComponent,
    ColumnsComponent,
    LogoComponent,
    CardFormComponent,
    FormMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
