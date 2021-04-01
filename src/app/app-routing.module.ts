import { ProjectModule } from './components/projects/project.module';
import { EditNeedComponent } from './components/projects/edit-need/edit-need.component';
import { NeedMatchesComponent } from './components/projects/need-matches/need-matches.component';
import { NeedComponent } from './components/projects/need/need.component';
import { EditProjectComponent } from './components/projects/edit-project/edit-project.component';
import { NeedsComponent } from './components/projects/needs/needs.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ProjectNeedsComponent } from './components/projects/project-needs/project-needs.component';
import { ProjectAboutComponent } from './components/projects/project-about/project-about.component';
import { ProjectsComponent } from './components/projects/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';


const routes: Routes = [
  // {path:"", redirectTo: "/dashboard", pathMatch: "full"},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  { path: 'projects', loadChildren: () => import('./components/projects/project.module').then(m => m.ProjectModule) },
  { path: 'contributions', loadChildren: () => import('./components/contributions/contribution.module').then(m => m.ContributionModule) },
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
