import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LatestProjectsComponent } from './components/dashboard/latest-projects/latest-projects.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LatestEventsComponent } from './components/dashboard/latest-events/latest-events.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LatestBroadcastsComponent } from './components/dashboard/latest-broadcasts/latest-broadcasts.component';
import { LatestNewsComponent } from './components/dashboard/latest-news/latest-news.component';
import { SponsorsComponent } from './components/dashboard/sponsors/sponsors.component';
import { LatestContributionsComponent } from './components/dashboard/latest-contributions/latest-contributions.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LatestProjectsComponent,
    LatestEventsComponent,
    LatestBroadcastsComponent,
    LatestNewsComponent,
    SponsorsComponent,
    LatestContributionsComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
