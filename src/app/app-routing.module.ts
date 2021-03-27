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
import { CreateComponent } from './components/projects/create/create.component';

const routes: Routes = [
  // {path:"", redirectTo: "/dashboard", pathMatch: "full"},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'create', component: CreateComponent},
  {path: 'projects/:id/about', component: ProjectAboutComponent},
  {path: 'projects/:id/needs', component: ProjectNeedsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
