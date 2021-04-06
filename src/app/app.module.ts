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

import { HomeComponent } from './components/home/home.component';

import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';

import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarketComponent } from './components/market/market/market.component';
import { MarketAddComponent } from './components/market/market-add/market-add.component';
import { AboutMarketComponent } from './components/market/about-market/about-market.component';
import { JobsComponent } from './components/employment/jobs/jobs/jobs.component';
import { JobAddComponent } from './components/employment/jobs/job-add/job-add.component';
import { AboutJobComponent } from './components/employment/jobs/about-job/about-job.component';
import { AboutInternshipComponent } from './components/employment/internships/about-internship/about-internship.component';
import { InternshipAddComponent } from './components/employment/internships/internship-add/internship-add.component';
import { InternshipsComponent } from './components/employment/internships/internships/internships.component';



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
    HomeComponent,
    SigninComponent,
    SignupComponent,
    MenuComponent,
    MarketComponent,
    MarketAddComponent,
    AboutMarketComponent,
    JobsComponent,
    JobAddComponent,
    AboutJobComponent,
    AboutInternshipComponent,
    InternshipAddComponent,
    InternshipsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
