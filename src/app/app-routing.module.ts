import { AboutInternshipComponent } from './components/employment/internships/about-internship/about-internship.component';
import { InternshipAddComponent } from './components/employment/internships/internship-add/internship-add.component';
import { AboutJobComponent } from './components/employment/jobs/about-job/about-job.component';
import { JobAddComponent } from './components/employment/jobs/job-add/job-add.component';
import { JobsComponent } from './components/employment/jobs/jobs/jobs.component';
import { AboutMarketComponent } from './components/market/about-market/about-market.component';
import { MarketAddComponent } from './components/market/market-add/market-add.component';
import { MarketComponent } from './components/market/market/market.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { InternshipsComponent } from './components/employment/internships/internships/internships.component';


const routes: Routes = [
  // {path:"", redirectTo: "/dashboard", pathMatch: "full"},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'market', component: MarketComponent},
  {path: 'market/add', component: MarketAddComponent},
  {path: 'market/:marketId/about', component: AboutMarketComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'jobs/add', component: JobAddComponent},
  {path: 'jobs/:jobId/about', component: AboutJobComponent},
  {path: 'internships', component: InternshipsComponent},
  {path: 'internships/add', component: InternshipAddComponent},
  {path: 'internships/:internshipId/about', component: AboutInternshipComponent},
  { path: 'projects', loadChildren: () => import('./components/projects/project.module').then(m => m.ProjectModule) },
  { path: 'contributions', loadChildren: () => import('./components/contributions/contribution.module').then(m => m.ContributionModule) },
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
