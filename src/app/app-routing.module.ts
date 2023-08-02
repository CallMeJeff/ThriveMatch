import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InvestorsPageComponent } from './components/investors/investors-page/investors-page.component';
import { InvestorsHomePageComponent } from './components/investors/investors-home-page/investors-home-page.component';
import { StartUpPageComponent } from './components/startups/start-up-page/start-up-page.component';
import { StartUpHomePageComponent } from './components/startups/start-up-home-page/start-up-home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MyMatchesComponent } from './pages/my-matches/my-matches.component';
const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'login', component: LogInComponent},
  {path:'signup', component: SignUpComponent}, //
  {path:'homepage', component: HomePageComponent},
  {path:'investorspage', component:InvestorsPageComponent},
  {path:'investorshomepage', component:InvestorsHomePageComponent},
  {path:'startuppage', component:StartUpPageComponent},
  {path:'startuphomepage', component:StartUpHomePageComponent},
  {path: 'about', component:AboutComponent},
  {path:'contact', component: ContactComponent},
  {path: 'mymatches', component:MyMatchesComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
